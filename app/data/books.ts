import { Book } from "@/types/book";

export const books: Book[] = [
    {
        slug: "the iliad",
        title: "The Iliad",
        author: "Homer",
        reviewUrl: "/books/theiliad",
        dateStarted: "09-12-2025",
        dateFinished: "Present",
    },
    {
        slug: "Emma",
        title: "Emma",
        author: "Jane Austen",
        reviewUrl: "/books/emma",
        dateStarted: "07-09-2025",
        dateFinished: "08-02-2025",
    },
    {
        slug: "east of eden",
        title: "East Of Eden",
        author: "John Steinbeck",
        reviewUrl: "/books/eastofeden",
        dateStarted: "01-02-2025",
        dateFinished: "01-31-2025",
    },
    {
        slug: "pride and prejudice",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        reviewUrl: "/books/prideandprejudice",
        dateStarted: "12-25-2024",
        dateFinished: "01-01-2025",
    },
];
