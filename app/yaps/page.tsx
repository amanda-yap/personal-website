import Link from "next/link";
import { getAllYaps } from "@/lib/yaps";

export default function Yaps() {
	const yaps = getAllYaps();

	return (
		<main>
		<h1 className="text-3xl font-semibold text-stone-900 mb-10">yaps</h1>

		<ul className="space-y-4">
			{yaps.map((yap) => (
				<li key={yap.slug} className="border-l-2 border-stone-900 pl-2.5">
					<Link
						href={`/yaps/${yap.slug}`}
						className="relative text-md text-semibold text-yellow-900 underline"
					>
						{yap.title}
					</Link>
					<p className="text-sm text-stone-600 italic">{yap.date}</p>
				</li>
			))}
		</ul>
		</main>
	);
}