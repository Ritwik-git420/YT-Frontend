import { Button } from "@/components/ui/button"

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <div className="flex gap-1">
                <Button>Click me</Button>
            </div>
        </div>
    );
}
