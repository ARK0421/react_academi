import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BoardDetail = () => {
  const { id } = useParams();
  console.log({ id });

  const [board, setBoard] = useState({
    boardTitle: "",
    boardContents: "",
    boardWriter: "",
    boardHits: "",
  });
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
      <div>
        Title :{" "}
        <input
          type="text"
          name="boardTitle"
          value={board.boardTitle}
          readOnly
        />
        <br />
        Content :{" "}
        <textarea name="boardContents" value={board.boardContents} readOnly />
        <br />
        Writer :{" "}
        <input
          type="text"
          name="boardWriter"
          value={board.boardWriter}
          readOnly
        />
        <br />
        Hits : <input type="text" name="boardPass" value={board.boardHits} />
      </div>
    </>
  );
};

export default BoardDetail;
