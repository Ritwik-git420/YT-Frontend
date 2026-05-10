import { Button } from "@/components/reusable/button";
import PlaylistCard from "@/components/ui/Playlistcard";


const account = {
	name: "Ritwik",
	email: "ritwik@example.com",
	joined: "May 2026",
};

type PlaylistType = {
	id: number;
	title: string;
	privacy: "Private" | "Public";
	videoCount: number;
	thumbnail: string;
};

const mockPlaylists: PlaylistType[] = [
	{ id: 1, title: "Web Development", privacy: "Public", videoCount: 12, thumbnail: "https://picsum.photos/seed/1/400/225" },
	{ id: 2, title: "Favorites", privacy: "Private", videoCount: 45, thumbnail: "https://picsum.photos/seed/2/400/225" },
	{ id: 3, title: "React Tutorials", privacy: "Public", videoCount: 8, thumbnail: "https://picsum.photos/seed/3/400/225" },
	{ id: 4, title: "Music", privacy: "Public", videoCount: 120, thumbnail: "https://picsum.photos/seed/4/400/225" },
	{ id: 5, title: "Watch Later", privacy: "Private", videoCount: 3, thumbnail: "https://picsum.photos/seed/5/400/225" },
];

export default function AccountPage() {
	return (
		<>
			<section className="mx-auto w-full px-4 py-8 sm:px-6">
				<div className="mb-6">
					<h1 className="text-2xl font-bold">Account</h1>
					<p className="mt-1 text-sm text-muted-foreground">
						Manage your basic profile details.
					</p>
				</div>

				<div className="flex gap-3">
					<Button className="text-lg px-5 bg-transparent text-white border hover:bg-white/10 rounded-full transition-all  hover:border-white/20">
						Playlists
					</Button>
					<Button className="text-lg px-5 bg-transparent text-gray-400 border border-transparent hover:border-white/20 hover:text-white hover:bg-white/10 rounded-full transition-all">
						Posts
					</Button>
				</div>
			</section>


			

			{/* Playlist Grid Section */}
			<section className="mx-auto w-full px-4 pb-8 sm:px-6
			sm:gap-2" >
				
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
					{mockPlaylists.map((playlist) => (
						<PlaylistCard
							key={playlist.id}
							title={playlist.title}
							privacy={playlist.privacy}
							videoCount={playlist.videoCount}
							thumbnail={playlist.thumbnail}
						/>
					))}
				</div>
			</section>
		</>
	);
}
