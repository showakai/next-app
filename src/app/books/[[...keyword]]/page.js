import LinkedBookDetails from "@/components/LinkedBookDetails";
import { getBooksByKeyword } from "@/lib/getter";

export default async function BookResult({ params: { keyword = "React" } }) {
  const books = await getBooksByKeyword(keyword);

  return (
    <>
      {books.map((book, i) => (
        <LinkedBookDetails book={book} index={i + 1} key={book.id} />
      ))}
    </>
  );
}
