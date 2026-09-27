export type ProjectLink = { label: string; href: string };

export type PostSummary = {
    title: string;
    url: string;
    date: string;
    year: string;
    image?: string;
    imageAlt?: string;
    links: ProjectLink[];
};

const linkLine = /^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)\s*$/;
const imageLine = /^!\[([^\]]*)\]\(([^)\s]+)\)\s*$/;

export function toPostSummary(post: any): PostSummary {
    const lines: string[] = (post.rawContent?.() ?? "").split("\n").map((l: string) => l.trim());
    const fm = post.frontmatter;

    const links = lines
        .map(l => l.match(linkLine))
        .filter((m): m is RegExpMatchArray => !!m)
        .map(([, , href]) => ({
            label: href.includes("github.com") ? "github" : "live",
            href,
        }));

    const imageMatch = lines.map(l => l.match(imageLine)).find(Boolean);

    const date = new Date(fm.date);

    return {
        title: fm.title,
        url: post.url,
        date: fm.date,
        year: isNaN(date.getTime()) ? "" : String(date.getFullYear()),
        image: fm.image ?? imageMatch?.[2],
        imageAlt: imageMatch?.[1] || fm.title,
        links,
    };
}

export function getPosts(modules: Record<string, any>): PostSummary[] {
    return Object.values(modules)
        .map(toPostSummary)
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}
