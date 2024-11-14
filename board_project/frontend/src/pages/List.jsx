import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const list_db = axios
      .get("http://localhost:8027/board/list")
      .then((res) => {
        console.log("res", res.data);

        setList(res.data);
      });
  }, []);

  return (
    <>
      <h2>List.jsx</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Hits</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {list.map((board) => (
            <tr key={board.id}>
              <td>{board.id}</td>
                <td>
              <Link to={`/detail/${board.id}`} >
                  {board.boardTitle}
              </Link>
                </td>
              <td>{board.boardWriter}</td>
              <td>{board.boardHits}</td>
              <td>{board.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
