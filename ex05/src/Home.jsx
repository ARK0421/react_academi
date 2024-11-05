import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Home.jsx</h2>
      <Link
        to={{
          pathname: "/param",
          search: "q=react&page=10",
        }}
      >
        query string 전송
      </Link>
      <br />

      {/* 간단 ver. */}
      <Link to="/param/10">path parameter</Link>
      <br />
      <Link to="/param?q=Hello&page=20">query string</Link>
    </>
  );
};
export default Home;
