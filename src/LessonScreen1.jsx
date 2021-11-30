import { Helmet } from "react-helmet";

export default function LessonScreen1() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Grace Papers Lesson 1" />
        <meta property="og:title" content="Grace Papers Lesson 1" />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content="https://grace-papers.imgix.net/images/v2lesson/47/12.png?w=318&h=150&fit=crop"
        />
        <meta
          property="og:url"
          content="https://platform.gracepapers.com.au/lesson/1"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:description" content="Grace Papers Lesson 1" />
        <meta property="og:site_name" content="Grace Papers" />
        <meta name="twitter:image:alt" content="An image alt" />
      </Helmet>
      <h1>Lesson 1</h1>
    </>
  );
}
