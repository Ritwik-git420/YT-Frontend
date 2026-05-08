"use client";
import Link from "next/link";
import { ArrowLeft, Image as ImageIcon, LockKeyhole, LogIn, Mail, UserRound } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/reusable/button";
import { Input } from "@/components/reusable/input";
import { useState } from "react";

type Inputs = {
	fullName: string
	email: string
	password: string
	username: string
	avtar: FileList
	coverImage: FileList
}

const registerUser: SubmitHandler<Inputs> = async (data) => {
	const userData = new FormData();
	userData.append("fullName", data.fullName);
	userData.append("email", data.email);
	userData.append("password", data.password);
	userData.append("username", data.username);
	userData.append("avtar", data.avtar[0]);
	userData.append("coverImage", data.coverImage[0]);

	try {
		const response = await fetch("http://localhost:8000/api/v1/users/register", {
			method: "POST",
			body: userData,
		});

		const result = await response.json();
		if (!response.ok) {
			throw new Error(result.message || "Registration failed");
		}

		console.log("Registered user:", result);
	} catch (error) {
		console.log(error);
	}
}

export default function RegisterPage() {
	const { register, handleSubmit, trigger, formState: { errors, isSubmitting } } = useForm<Inputs>({
		shouldUnregister: false,
	})
	const [step, setStep] = useState("0");

	const goToSecondStep = async () => {
		const isValid = await trigger(["fullName", "email", "password"]);
		if (isValid) {
			setStep("1");
		}
	}

	return (
		<>
			{step === "0" &&
				(<section className="rounded-lg border bg-card p-5 shadow-sm">
					<div className="mb-6">
						<p className="">Create your account</p>
						<h1 className="mt-1 text-2xl font-bold">Register a new account</h1>
					</div>

					<form className="space-y-4"
						onSubmit={handleSubmit(registerUser)}
					>
						{/* Full name block */}
						<div className="space-y-2">
							<div className="flex items-center justify-between gap-3">
								<label htmlFor="fullName" className="text-sm font-medium">
									Full Name
								</label>
							</div>
							<div className="relative">
								<LockKeyhole className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
								<Input
									id="fullName"
									type="text"
									{...register("fullName", { required: "Full name is required" })}
									placeholder="Enter your Full Name"
									className="pl-8"
								/>
							</div>
							{errors.fullName && <p className="text-sm text-destructive">{errors.fullName.message}</p>}
						</div>

						{/* Email block */}
						<div className="space-y-2">
							<label htmlFor="email" className="">
								Email
							</label>
							<div className="relative">
								<Mail className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
								<Input
									id="email"
									type="email"
									placeholder="name@example.com"
									className="pl-8"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^\S+@\S+\.\S+$/,
											message: "Enter a valid email",
										},
									})}
								/>
							</div>
							{errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
						</div>

						{/* Set Password Block */}
						<div className="space-y-2">
							<div className="flex items-center justify-between gap-3">
								<label htmlFor="password" className="text-sm font-medium">
									Password
								</label>
							</div>
							<div className="relative">
								<LockKeyhole className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
								<Input
									id="password"
									{...register("password", {
										required: "Password is required",
										minLength: {
											value: 6,
											message: "Password must be at least 6 characters",
										},
									})}
									type="password"
									placeholder="Create a password"
									autoComplete="new-password"
									className="pl-8"
								/>
							</div>
							{errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
						</div>

						<Button type="button" size="lg" className="w-full"
						onClick={goToSecondStep}
						>
							<LogIn />
							Next
						</Button>
					</form>

					<p className="mt-6 text-center text-sm text-muted-foreground">
						Already have an account?{" "}
						<Link href="/login" className="font-medium text-foreground">
							Log in
						</Link>
					</p>
				</section>)}

			{step === "1" &&
				(<section className="rounded-lg border bg-card p-5 shadow-sm">
					<div className="mb-6">
						<p className="">Profile setup</p>
						<h1 className="mt-1 text-2xl font-bold">Finish your account</h1>
					</div>

					<form className="space-y-4"
						onSubmit={handleSubmit(registerUser)}
					>
						{/* Username block */}
						<div className="space-y-2">
							<div className="flex items-center justify-between gap-3">
								<label htmlFor="username" className="text-sm font-medium">
									Username
								</label>
							</div>
							<div className="relative">
								<UserRound className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
								<Input
									id="username"
									type="text"
									{...register("username", {
										required: "Username is required",
										minLength: {
											value: 3,
											message: "Username must be at least 3 characters",
										},
									})}
									placeholder="Choose a username"
									className="pl-8"
								/>
							</div>
							{errors.username && <p className="text-sm text-destructive">{errors.username.message}</p>}
						</div>

						{/* Avatar block */}
						<div className="space-y-2">
							<div className="flex items-center justify-between gap-3">
								<label htmlFor="avtar" className="text-sm font-medium">
									Avatar
								</label>
							</div>
							<div className="relative">
								<ImageIcon className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
								<Input
									id="avtar"
									type="file"
									accept="image/*"
									{...register("avtar", {
										validate: (files) => files?.length > 0 || "Avatar is required",
									})}
									className="pl-8"
								/>
							</div>
							{errors.avtar && <p className="text-sm text-destructive">{errors.avtar.message}</p>}
						</div>

						{/* Cover image block */}
						<div className="space-y-2">
							<div className="flex items-center justify-between gap-3">
								<label htmlFor="coverImage" className="text-sm font-medium">
									Cover Image
								</label>
							</div>
							<div className="relative">
								<ImageIcon className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
								<Input
									id="coverImage"
									type="file"
									accept="image/*"
									{...register("coverImage", {
										validate: (files) => files?.length > 0 || "Cover image is required",
									})}
									className="pl-8"
								/>
							</div>
							{errors.coverImage && <p className="text-sm text-destructive">{errors.coverImage.message}</p>}
						</div>

						<div className="grid grid-cols-2 gap-3">
							<Button type="button" variant="outline" size="lg" onClick={() => setStep("0")}>
								<ArrowLeft />
								Back
							</Button>
							<Button type="submit" size="lg" disabled={isSubmitting}>
								<LogIn />
								Register
							</Button>
						</div>
					</form>

					<p className="mt-6 text-center text-sm text-muted-foreground">
						Already have an account?{" "}
						<Link href="/login" className="font-medium text-foreground">
							Log in
						</Link>
					</p>
				</section>)}

		</>



	);
}
