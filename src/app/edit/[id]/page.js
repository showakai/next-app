import BookDetails from "@/components/BookDetails";
import FormEdit from "@/components/FormEdit";
import { getBookById, getReviewById } from "@/lib/getter";

export default async function EditPage({ params }) {
  const books = await getBookById(params.id);
  const review = await getReviewById(params.id);
  //[YYYY-MM-DD]形式の日付を形成

  console.log(review);
  const read = (review?.read || new Date()).toLocaleDateString("sv-SE");

  return (
    <div id="form">
      <BookDetails book={books} />

      <hr />

      <FormEdit src={{ id: books.id, read, memo: review?.memo }} />
    </div>
  );
}
