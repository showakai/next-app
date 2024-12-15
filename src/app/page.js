import LinkedBookDetails from "@/components/LinkedBookDetails";
import { getAllReviews } from "@/lib/getter";

export const dynamic = "force-dynamic";
export default async function Home() {
  const reviews = await getAllReviews();

  return (
    <>
      {reviews.map((b, i) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </>
  );
}
3;
