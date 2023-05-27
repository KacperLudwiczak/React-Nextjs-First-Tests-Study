import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/first-article">First Article</Link>
        </li>
        <li>
          <Link href="/news/second-article"> Second Article</Link>
        </li>
      </ul>
    </>
  );
}
