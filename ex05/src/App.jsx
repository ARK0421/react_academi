import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import Header from "./Header";
import Param1 from "./Param1";

function App() {
  return (
    <>
      <h2>App.jsx</h2>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />

          {/* /param/1 /param/6 */}
          <Route path="/param/:id" element={<Param1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
