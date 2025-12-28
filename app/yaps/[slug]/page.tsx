import { getYapBySlug, getAllYaps } from "@/lib/yaps";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	const yaps = getAllYaps();

	return yaps.map((yap) => ({
		slug: yap.slug,
	}));
}

export default async function Yap({ params }: Props) {
	const { slug } = await params;
	const yap = await getYapBySlug(slug);

	return (
		<main>
		<h1 className="text-2xl font-semibold mb-2">{yap.title}</h1>
		<p className=" text-md text-gray-600 mb-6">{yap.date}</p>

		<article
			dangerouslySetInnerHTML={{ __html: yap.content }}
		/>
		</main>
	);
}
