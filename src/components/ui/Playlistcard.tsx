type PlaylistCardProps = {
    title: string;
    privacy: "Private" | "Public";
    videoCount: number;
    thumbnail: string; // image URL from backend
};

export default function PlaylistCard({
    title,
    privacy,
    videoCount,
    thumbnail,
}: PlaylistCardProps) {
    return (
        <div className="flex flex-col gap-2 cursor-pointer group">

            {/* Thumbnail Stack Effect */}
            <div className="relative">

                {/* back cards */}
                <div className="absolute top-[-8px] left-4 right-4 h-full rounded-xl bg-[#5a5648] z-0" />
                <div className="absolute top-[-4px] left-2 right-2 h-full rounded-xl bg-[#8d866f] z-0" />

                {/* main image */}
                <div className="relative z-10 overflow-hidden rounded-xl">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />

                    {/* bottom overlay */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded-md flex items-center gap-1">
                        <span>≡</span>
                        <span>{videoCount} video</span>
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
                <h3 className="text-white text-lg font-semibold line-clamp-1">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm">{privacy}</p>

                <button className="text-gray-300 text-sm text-left hover:text-white transition-colors">
                    View full playlist
                </button>
            </div>
        </div>
    );
}