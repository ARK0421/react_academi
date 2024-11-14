import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/save">게시글 작성</Link>
      <Link to="/list">게시글 목록</Link>
    </>
  );
};

export default Header;
