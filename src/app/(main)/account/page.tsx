import { Button } from "@/components/reusable/button";

const account = {
	name: "Ritwik",
	email: "ritwik@example.com",
	joined: "May 2026",
};

export default function AccountPage() {
	return (
		<section className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
			<div className="mb-6">
				<h1 className="text-2xl font-bold">Account</h1>
				<p className="mt-1 text-sm text-muted-foreground">
					Manage your basic profile details.
				</p>
			</div>

			<div className="rounded-lg border bg-card p-5 shadow-sm">
				<div className="flex items-center gap-4 border-b pb-5">
					<div className="flex size-14 items-center justify-center rounded-full bg-muted text-lg font-semibold">
						{account.name.charAt(0)}
					</div>
					<div>
						<h2 className="font-semibold">{account.name}</h2>
						<p className="text-sm text-muted-foreground">{account.email}</p>
					</div>
				</div>

				<div className="divide-y">
					<div className="flex items-center justify-between gap-4 py-4">
						<div>
							<p className="text-sm font-medium">Full name</p>
							<p className="text-sm text-muted-foreground">{account.name}</p>
						</div>
						<Button variant="outline" size="sm">
							Edit
						</Button>
					</div>

					<div className="flex items-center justify-between gap-4 py-4">
						<div>
							<p className="text-sm font-medium">Email</p>
							<p className="text-sm text-muted-foreground">{account.email}</p>
						</div>
						<Button variant="outline" size="sm">
							Edit
						</Button>
					</div>

					<div className="flex items-center justify-between gap-4 pt-4">
						<div>
							<p className="text-sm font-medium">Joined</p>
							<p className="text-sm text-muted-foreground">{account.joined}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
