import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Save from "./pages/Save";
import List from "./pages/List";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <h1>Member Project</h1>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
