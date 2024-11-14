import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8027, () => {
  console.log("Server Start!");
});

const db = mysql2.createConnection({
  host: "127.0.0.1",
  user: "user_ex",
  password: "1234",
  port: "3306",
  database: "db_ex",
});

db.connect((err) => {
  console.log("DB Connect Success");
  console.log(("err", err));
});

app.get("/", () => {
  console.log("Move to Home");
});

app.post("/board/save", (req, res) => {
  const {
    boardTitle,
    boardContents,
    boardPass,
    boardWriter,
    boardHits,
    createdAt,
  } = req.body.board;
  console.log(
    boardTitle,
    boardContents,
    boardWriter,
    boardPass,
    boardHits,
    createdAt
  );

  const sql =
    "insert into board_table(boardTitle, boardContents, boardPass, boardWriter) values(?,?,?,?)";
  db.query(
    sql,
    [boardTitle, boardContents, boardWriter, boardPass],
    (err, results, fields) => {
      console.log("err", err);
    }
  );
  res.status(200).send("글 작성 성공!");
});

app.get("/board/list", (req, res) => {
  const sql =
    "select id, boardTitle, boardContents, boardWriter, boardHits, createdAt from board_table order by id desc";
  db.query(sql, (err, results, fields) => {
    console.log("results", results);
    res.json(results);
  });
});

app.get("/board/detail/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "select boardTitle, boardContents, boardWriter, boardHits, createdAt from board_table where id=?";
  db.query(sql, [id], (err, results, fields) => {
    if (results.length == 0) {
      // 조회 결과 없음
      res.status(404).send("요청하신 데이터를 찾을 수 없습니다.");
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });
});
