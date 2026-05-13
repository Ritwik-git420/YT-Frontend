"use client";
import Link from "next/link";
import { LockKeyhole, LogIn, Mail } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/reusable/button";
import { Input } from "@/components/reusable/input";
import { Console } from "console";


type Inputs = {
	email: string
	password: string
}



export default function LoginPage() {

	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Inputs>();


	const loginUser: SubmitHandler<Inputs> = async (data) => {
		console.log(data)
		try {
			const response = await fetch(
				"http://localhost:8000/api/v1/users/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					credentials: "include",
					body: JSON.stringify({
						email: data.email,
						password: data.password,
					}),
				}
			)

			const result = await response.json()

			if (!response.ok) {
				throw new Error(result.message || "Login failed")
			}


		} catch (error) {
			console.log(error)
		}



	}
	return (
		<section className="rounded-lg border bg-card p-5 shadow-sm">
			<div className="mb-6">
				<p className="">Welcome back</p>
				<h1 className="mt-1 text-2xl font-bold">Log in to your account</h1>
			</div>

			<form className="space-y-4"
				onSubmit={handleSubmit(loginUser)}
			>
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
							{...register("email", { required: "Email is required" })}
							autoComplete="email"
							className="pl-8"
						/>
					</div>
					{errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
				</div>

				<div className="space-y-2">
					<div className="flex items-center justify-between gap-3">
						<label htmlFor="password" className="text-sm font-medium">
							Password
						</label>
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground"
						>
							Forgot?
						</Link>
					</div>
					<div className="relative">
						<LockKeyhole className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
						<Input
							id="password"
							{...register("password", { required: "Password is required" })}
							type="password"
							placeholder="Enter your password"
							autoComplete="current-password"
							className="pl-8"
						/>
					</div>
					{errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
				</div>

				<label className="flex items-center gap-2 text-sm text-muted-foreground">
					<input
						type="checkbox"
						name="remember"
						className="size-4 rounded border-input bg-background"
					/>
					Remember me
				</label>

				<Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
					<LogIn />
					Login
				</Button>
			</form>

			<p className="mt-6 text-center text-sm text-muted-foreground">
				Don&apos;t have an account?{" "}
				<Link href="/register" className="font-medium text-foreground">
					Register
				</Link>
			</p>
		</section>
	);
}
