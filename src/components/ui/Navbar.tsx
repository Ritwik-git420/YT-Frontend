"use client";
import Link from "next/link";
import { Menu, Search } from "lucide-react";

import { Button } from "@/components/reusable/button";
import { Input } from "@/components/reusable/input";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

function Navbar() {
	return (
		<header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
			<div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
				<Link href="/" className="flex shrink-0 items-center gap-2">
					<span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
						F
					</span>
					<span className="">Vid Tube</span>
				</Link>

				<form className="mx-auto hidden w-full max-w-md md:block">
					<label htmlFor="desktop-search" className="sr-only">
						Search
					</label>
					<div className="relative">
						<Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
						<Input
							id="desktop-search"
							type="search"
							placeholder="Search"
							className="pl-8"
						/>
					</div>
				</form>

				<div className="ml-auto hidden items-center md:flex">
					<Button asChild>
						<Link href="/register">Register</Link>
					</Button>
				</div>

				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="ml-auto md:hidden"
							aria-label="Open navigation menu"
						>
							<Menu />
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="w-80">
						<SheetHeader>
							<SheetTitle>
								<Link href="/" className="flex items-center gap-2">
									<span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
										F
									</span>
									<span>Fullstack</span>
								</Link>
							</SheetTitle>
						</SheetHeader>

						<div className="flex flex-1 flex-col gap-4 px-4">
							<form>
								<label htmlFor="mobile-search" className="sr-only">
									Search
								</label>
								<div className="relative">
									<Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
									<Input
										id="mobile-search"
										type="search"
										placeholder="Search"
										className="pl-8"
									/>
								</div>
							</form>

							<SheetClose asChild>
								<Button asChild className="w-full">
									<Link href="/login">Login</Link>
								</Button>
							</SheetClose>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}

export default Navbar;
