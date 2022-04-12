import Link from "next/link";

function NewsPage() {
  return (
    <section>
      <h1> This is the Main News Page</h1>

      <h2>Today's Latest News about Tourism Department</h2>
      <ul>
        <li>
          <Link href="/news/tourists">Tourists</Link>
        </li>
        <li>
          <Link href="/news/picnic-spots">Picnic Spots</Link>
        </li>
        <li>
          <Link href="/news/waterfall">Waterfall</Link>
        </li>
      </ul>
    </section>
  );
}

export default NewsPage;
