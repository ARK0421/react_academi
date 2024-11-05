import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Home.jsx</h2>
      <Link
        to={{
          pathname: "/param/1",
        }}
      >
        path variable 전송
      </Link>
    </>
  );
};
export default Home;
