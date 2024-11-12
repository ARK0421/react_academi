import axios from "axios";
import { useEffect, useState } from "react";

const List = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const list_db = axios
      .get("http://localhost:8027/member/list")
      .then((res) => {
        console.log("res", res.data);

        setList(res.data);
      });
  });

  return (
    <>
      <h2>List.jsx</h2>
    </>
  );
};

export default List;
