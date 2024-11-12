import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Save from "./Save";
import List from "./List";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1>App.jsx</h1>
      <BrowserRouter>
        <Header />
        <Body />
        <Routes>
          <Route path="/save" element={<Save />}>
            회원 가입
          </Route>
          <Route path="/list" element={<List />}>회원 목록</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
