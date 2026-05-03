"use client";
import Link from "next/link";
import { LockKeyhole, LogIn, Mail } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/reusable/button";
import { Input } from "@/components/reusable/input";

type Inputs = {
	email: string
	password: string
}

const loginUser: SubmitHandler<Inputs> = async (data) => {
	console.log(data)
}

export default function LoginPage() {
	const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
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
							{...register("email")}
							autoComplete="email"
							className="pl-8"
							required
						/>
					</div>
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
							{...register("password")}
							type="password"
							placeholder="Enter your password"
							autoComplete="current-password"
							className="pl-8"
							required
						/>
					</div>
				</div>

				<label className="flex items-center gap-2 text-sm text-muted-foreground">
					<input
						type="checkbox"
						name="remember"
						className="size-4 rounded border-input bg-background"
					/>
					Remember me
				</label>

				<Button type="submit" size="lg" className="w-full">
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
