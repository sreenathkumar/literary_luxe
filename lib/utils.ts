import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//Function which shortens text
export function shortenText(text: string | undefined, length: number) {
  if (!text) return
  return text.length > length ? text.slice(0, length - 3) + '...' : text
}

//Function which return 2 unique books from each of the list of the books
export function getUniqueBooks(lists: any[]) {
  const result: any[] = [];
  const seenBooks = new Set();

  lists.forEach(list => {
    let count = 0;

    for (const book of list.books) {
      if (!seenBooks.has(book.title)) { // Assuming 'title' is a unique identifier for the book
        result.push(book);
        seenBooks.add(book.title);
        count++;
      }
      if (count === 2) break; // Stop after selecting 2 books
    }
  });

  return result;
}
