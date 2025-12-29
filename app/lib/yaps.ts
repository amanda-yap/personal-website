import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const yapsDirectory = path.join(process.cwd(), "yaps");


export function getAllYaps() {
	const fileNames = fs.readdirSync(yapsDirectory);

	return fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, "");
		const fullPath = path.join(yapsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		const { data } = matter(fileContents);

		return {
			slug,
			title: data.title,
			date: data.date,
		};
	})
	// Sort by date (convert to ISO date format then sort)
	.sort((a, b) => {
		const toISO = (d: string) => {
			const [day, month, year] = d.split("-");
			return `${year}-${month}-${day}`;
		};

		return toISO(b.date).localeCompare(toISO(a.date));
	});
}

export async function getYapBySlug(slug: string) {
	const fullPath = path.join(yapsDirectory, `${slug}.md`);

	if (!fs.existsSync(fullPath)) {
		throw new Error(`Yap not found: ${slug}`);
	}

	const fileContents = fs.readFileSync(fullPath, "utf8");

	const { data, content } = matter(fileContents);

	const processedContent = await remark()
		.use(html)
		.process(content);

	return {
		title: data.title,
		date: data.date,
		content: processedContent.toString(),
	};
}
