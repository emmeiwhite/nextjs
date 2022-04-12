import Link from "next/link";

function HomePage() {
  return (
    <section>
      <h1> This is the Home Page of our Next.JS App</h1>

      <h2>Main News Sources Today</h2>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/foods">
            <a>Foods</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a>News</a>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default HomePage;
