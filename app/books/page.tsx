import { books } from "@/data/books";
import { MediaLink } from "@/components/medialink";
import { StatsBar } from "@/components/statsbar";

export default function BooksPage() {
	return (
    	<section>
			<h1 className="text-3xl font-semibold mb-6">Books</h1>
			<StatsBar
				total={books.length}
			/>
			{books.map(book => (
				<MediaLink key={book.slug} item={book} />
			))}
		</section>
  );
}
