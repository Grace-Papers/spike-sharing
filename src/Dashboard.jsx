import { Helmet } from "react-helmet";

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Helmet</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h1>Dashboard</h1>
    </>
  );
}
