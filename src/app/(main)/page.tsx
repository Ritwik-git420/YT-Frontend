type Video = {
	title: string;
	channel: string;
	views: string;
	date: string;
	thumbnail: string;
};

const videos: Video[] = [
	{
		title: "Build a simple Next.js app",
		channel: "Code Daily",
		views: "12K views",
		date: "2 days ago",
		thumbnail:
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
	},
	{
		title: "React hooks explained slowly",
		channel: "Frontend School",
		views: "48K views",
		date: "1 week ago",
		thumbnail:
			"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
	},
	{
		title: "Design a clean dashboard",
		channel: "UI Practice",
		views: "8.4K views",
		date: "3 days ago",
		thumbnail:
			"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
	},
	{
		title: "JavaScript array methods",
		channel: "JS Basics",
		views: "21K views",
		date: "5 days ago",
		thumbnail:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
	},
	{
		title: "Make your website responsive",
		channel: "Layout Lab",
		views: "15K views",
		date: "4 days ago",
		thumbnail:
			"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
	},
	{
		title: "CSS flexbox in 10 minutes",
		channel: "Style Guide",
		views: "32K views",
		date: "2 weeks ago",
		thumbnail:
			"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
	},
];

export default function Home() {
	return (
		<section className="p-6">
			<h1 className="mb-6 text-2xl font-bold">Recommended videos</h1>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{videos.map((video) => (
					<VideoCard key={video.title} video={video} />
				))}
			</div>
		</section>
	);
}

function VideoCard({ video }: { video: Video }) {
	return (
		<article>
			<img
				src={video.thumbnail}
				alt={video.title}
				className="aspect-video w-full rounded-lg object-cover"
			/>

			<div className="pt-3">
				<h2 className="font-semibold">{video.title}</h2>
				<p className="mt-1 text-sm text-muted-foreground">{video.channel}</p>
				<p className="mt-1 text-sm text-muted-foreground">
					{video.views} . {video.date}
				</p>
			</div>
		</article>

	);
}
