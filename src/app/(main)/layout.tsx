import Navbar from "@/components/ui/Navbar";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			<main className="flex flex-1 flex-col">{children}</main>
		</>
	);
}
