import { Book } from "../../../models/book";

export default async function books(): Promise<Book[]> {
  // Simulate a database call
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
  ];
}