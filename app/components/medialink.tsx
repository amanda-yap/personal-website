import Link from "next/link";

export function MediaLink({ item }: any) {
	return (
		<Link
			href={item.reviewUrl}
			className="block border-l-2 border-l-zinc-500 pl-4 py-2 mt-4 hover:bg-white/40 transition duration-200"
		>
			<h2 className="text-l font-semibold">{item.title}</h2>
			<h3 className="text-sm">{item.author}</h3>
			<p className="text-sm italic text-neutral-600">
				{item.dateStarted} - {item.dateFinished}
			</p>
		</Link>
	);
}
