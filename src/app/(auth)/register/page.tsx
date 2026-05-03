"use client";
import Link from "next/link";
import { LockKeyhole, LogIn, Mail } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/reusable/button";
import { Input } from "@/components/reusable/input";

type Inputs = {
	fullName: string
	email: string
	password: string
}

const registerUser: SubmitHandler<Inputs> = async (data) => {
	
}

export default function RegisterPage() {
	const { register, handleSubmit } = useForm<Inputs>()
	return (
		<section className="rounded-lg border bg-card p-5 shadow-sm">
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
							{...register("fullName")}
							placeholder="Enter your Full Name"
							className="pl-8"
							required
						/>
					</div>
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
							required
							{...register("email")}
						/>
					</div>
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
							{...register("password")}
							type="password"
							placeholder="Create a password"
							autoComplete="new-password"
							className="pl-8"
							required
						/>
					</div>
				</div>

				<Button type="submit" size="lg" className="w-full">
					<LogIn />
					Register
				</Button>
			</form>

			<p className="mt-6 text-center text-sm text-muted-foreground">
				Already have an account?{" "}
				<Link href="/login" className="font-medium text-foreground">
					Log in
				</Link>
			</p>
		</section>
	);
}
