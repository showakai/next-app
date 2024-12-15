"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function BookLayout({ children }) {
  const router = useRouter();
  const txtKeyword = useRef(null);

  //検索ボタンクリックでbooks.keywordにリダイレクト

  const handleSearch = () => {
    router.push(`/books/${txtKeyword.current.value}`);
  };

  return (
    <>
      <form className="mt-2 mb-4">
        <input
          type="text"
          ref={txtKeyword}
          className="bg-gray-100 text-black border border-gray-600 rounded mr-2 px-2 py-2 focus:bg-white focus:outline-none focus:border-red-50"
        />
        <button type="button" onClick={handleSearch}>
          検索
        </button>
      </form>
      <hr />
      {children}
    </>
  );
}
