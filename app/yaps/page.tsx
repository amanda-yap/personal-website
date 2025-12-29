import Link from "next/link";
import { getAllYaps } from "@/lib/yaps";

export default function Yaps() {
	const yaps = getAllYaps();

	return (
		<main>
		<h1 className="text-3xl font-semibold mb-10">yaps</h1>

		<ul className="space-y-4">
			{yaps.map((yap) => (
				<li key={yap.slug} className="border-l-2 border-orange-950 pl-2">
					<Link
						href={`/yaps/${yap.slug}`}
						className="relative text-md text-semibold text-orange-950 hover:underline"
					>
						{yap.title}
					</Link>
					<p className="text-sm text-gray-500">{yap.date}</p>
				</li>
			))}
		</ul>
		</main>
	);
}