import React from "react";
import { Helmet } from "react-helmet";

export default function Dashboard() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        setData({
          email: data.results[0].email,
          image: data.results[0].picture.medium,
        })
      );
  }, [setData]);
  return (
    <>
      <Helmet>
        <meta name="description" content={data.email} />
        <meta property="og:title" content={data.email} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={data?.image} />
        <meta
          property="og:url"
          content="https://platform.gracepapers.com.au/lesson/1"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:description" content={data.email} />
        <meta property="og:site_name" content="Grace Papers" />
        <meta name="twitter:image:alt" content="An image alt" />
      </Helmet>
      <h1>Dashboard</h1>
    </>
  );
}
