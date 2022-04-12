import { useRouter } from "next/router";

function DynamicPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  console.log(newsId);
  // send a request to the backend API
  // to fetch the news item with newsId
  return <h1>This is a Dynamic Page !!!</h1>;
}

export default DynamicPage;
