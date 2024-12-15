"use server";

import { redirect } from "next/navigation";
import { getBookById } from "./getter";
import prisma from "./prisma";

export async function addReview(data) {
  const book = await getBookById(data.get("id"));
  const input = {
    title: book.title,
    author: book.author,
    price: Number(book.price),
    publisher: book.publisher,
    published: book.publised,
    image: book.image,
    read: new Date(data.get("read")),
    memo: data.get("memo"),
  };

  //新規データであれば、登録、既存データなら更新

  await prisma.reviews.upsert({
    update: input,
    create: Object.assign({}, input, { id: data.get("id") }),
    where: {
      id: data.get("id"),
    },
  });

  redirect("/");
}

//削除ボタンで指定のレビューを削除
export async function removeReviews(data) {
  await prisma.reviews.delete({
    where: { id: data },
  });
  redirect("/");
}
