import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const BoardDetail = () => {
    const { id } = useParams();
    console.log({id});

    const [board, setBoard] = useState({
      boardTitle: "",
      boardContents: "",
      boardWriter: "",
      boardPass: ""
    });
    useEffect(()=>{
      const board_db = axios.get(`http://localhost:8027/board/detail/${id}`).then((res)=>{
        console.log("res",res.data)
        setBoard(res.data);
      });
    }, []);
   console.log(board)
    
  return (
    <>
        <div>
          Title :<p>{board.boardTitle}</p>
          <br />
          Content :{" "}
          <textarea
            name="boardContents"
          />
          <br />
          Writer :{" "}
          <input
            type="text"
            name="boardWriter"
          />
          <br />
          Password :{" "}
          <input
            type="text"
            name="boardPass"
          />
        </div>
    </>
  );
};