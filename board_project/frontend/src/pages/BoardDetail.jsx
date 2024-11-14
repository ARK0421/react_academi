import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BoardDetail = () => {
  const { id } = useParams();
  console.log({ id });

  const [board, setBoard] = useState("");
  useEffect(() => {
    const board_db = axios
      .get(`http://localhost:8027/board/detail/${id}`)
      .then((res) => {
        console.log("res", res.data);
        setBoard(res.data[0]);
      });
  }, []);
  console.log(board);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>{board.id}</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>{board.boardTitle}</td>
          </tr>
          <tr>
            <td>Writer</td>
            <td>{board.boardWriter}</td>
          </tr>
          <tr>
            <td>Hits</td>
            <td>{board.boardHits}</td>
          </tr>
          <tr>
            <td>createdAt</td>
            <td>{board.createdAt}</td>
          </tr>
          <tr>
            <td>Contents</td>
            <td>{board.boardContents}</td>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default BoardDetail;
