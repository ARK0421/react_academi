import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Save = () => {
  const navigate = useNavigate();

  const [board, setBoard] = useState({
    boardTitle: "",
    boardWriter: "",
    boardPass: "",
    boardContents: "",
  });

  const inputBoard = (e) => {
    const { name, value } = e.target;
    setBoard({
      ...board,
      [name]: value,
    });
    console.log(board);
  };

  const boardSave = async (e) => {
    e.preventDefault();
    console.log(board);

    let res = await axios.post("http://localhost:8027/board/save", {
      board: board,
    });
    console.log(res);
    navigate("/list");
  };

  return (
    <>
      <h2>Save.jsx</h2>
      <form onSubmit={boardSave}>
        Title :{" "}
        <input
          type="text"
          name="boardTitle"
          value={board.boardTitle}
          onChange={inputBoard}
        />
        <br />
        Content :{" "}
        <textarea
          name="boardContents"
          value={board.boardContents}
          onChange={inputBoard}
        />
        <br />
        Writer :{" "}
        <input
          type="text"
          name="boardWriter"
          value={board.boardWriter}
          onChange={inputBoard}
        />
        <br />
        Password :{" "}
        <input
          type="text"
          name="boardPass"
          value={board.member_mobile}
          onChange={inputBoard}
        />
        <br />
        <input type="submit" value={"글 작성"} />
      </form>
    </>
  );
};

export default Save;
