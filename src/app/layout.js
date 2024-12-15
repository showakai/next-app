import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Reading Log",
  description: "読書記録をするためのアプリ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1 className="text-4xl text-indigo-800 font-bold my-2">Reading Log</h1>

        {/* 共通のナビゲーションメニュー */}
        <ul className="flex bg-blue-600 mb-4 pl-2">
          <li className="block px-4 my-1 hover:bg-gray-100 rounded">
            <Link href="/" className="no-underline text-blue-300">
              Home
            </Link>
          </li>
          <li className="block px-4 my-1 hover:bg-gray-100 rounded">
            <Link href="/books" className="no-underline text-blue-300">
              Search
            </Link>
          </li>
          <li className="block px-4 my-1 hover:bg-gray-100 rounded">
            <a
              href="https://sho-test.com"
              target="_blank"
              className="no-underline text-blue-300"
            >
              Support
            </a>
          </li>
        </ul>
        <div className="ml-2">{children}</div>
      </body>
    </html>
  );
}
