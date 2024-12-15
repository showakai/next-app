import prisma from "./prisma";

export async function getAllReviews() {
  // 読了日を降順で取得

  return await prisma.reviews.findMany({
    orderBy: {
      read: "desc",
    },
  });
}

export function createBook(book) {
  //書籍情報から必要な情報だけを詰め替え
  const authors = book.volumeInfo.authors;
  const price = book.saleInfo.listPrice;
  const img = book.volumeInfo.imageLinks;

  return {
    id: book.id,
    title: book.volumeInfo.title,
    author: authors ? authors.join(",") : "",
    price: price ? price.amount : 0,
    publisher: book.volumeInfo.publisher,
    publised: book.volumeInfo.publishedDate,
    image: img ? img.smallThumbnail : "./vercel.svg",
  };
}

//引数のキーワードで検索
export async function getBooksByKeyword(keyword) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${keyword}&langRestrict=ja&maxResult=20&printType=books`
  );
  const result = await res.json();
  const books = [];

  for (const b of result.items) {
    console.log(b);
    books.push(createBook(b));
  }
  return books;
}

//idをキーに書籍情報を取得
export async function getBookById(id) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const result = await res.json();
  console.log(result);
  return createBook(result);
}

//idをキーにレビュー情報を取得
export async function getReviewById(id) {
  return prisma.reviews.findUnique({
    where: {
      id: id,
    },
  });
}
