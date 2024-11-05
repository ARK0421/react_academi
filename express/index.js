import express from "express";

const app = express();

app.listen(8000, () => {
  console.log("서버 시작!");
});

app.get("/", () => {
  console.log("기본주소 요청");
});

// hello get 요청이 오면 콘솔에 hello 주소 요청 출력
app.get("/hello", () => {
  console.log("/hello 주소 요청!");
});

app.get("/qs", (req) => {
  console.log(req.query);
  const { p1, p2 } = req.query;
  console.log(`p1: ${p1}, p2:${p2}`);
});

app.get("/:id", (req) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(id);
});
