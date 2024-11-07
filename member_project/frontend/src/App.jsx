import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Save from "./Save";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/save" element={<Save />}>
            회원 가입
          </Route>
          <Route path="/list">회원 목록</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
