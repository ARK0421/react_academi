import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

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
  console.log("db Connect Success!");
  console.log("err", err);
});

app.get("/", () => {
  console.log("기본 주소 요청!");
});

app.post("/member/save", (req, res) => {
  const { member_email, member_password, member_name, member_mobile } =
    req.body.member;
  console.log(member_email, member_password, member_name, member_mobile);

  const sql =
    "insert into member_table(member_email, member_password, member_name, member_mobile) values(?,?,?,?)";
  db.query(
    sql,
    [member_email, member_password, member_name, member_mobile],
    (err, results, fields) => {
      console.log("err", err);
    }
  );
  res.status(200).send("회원가입 성공!");
});

app.get("/member/list", (req, res) => {
  const sql = "select * from member_table";

  db.query(sql, (err, results, fields) => {
    console.log("results", results);
    res.json(results);
  });
});
