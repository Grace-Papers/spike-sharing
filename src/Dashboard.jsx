import React from "react";
import { Helmet } from "react-helmet";

export default function Dashboard() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data.results[0].email));
  }, [setData]);
  return (
    <>
      <Helmet>
        <meta name="description" content={data} />
        <meta property="og:title" content={data} />
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

        <meta property="og:description" content={data} />
        <meta property="og:site_name" content="Grace Papers" />
        <meta name="twitter:image:alt" content="An image alt" />
      </Helmet>
      <h1>Dashboard</h1>
    </>
  );
}
