import './App.css'
import { BrowserRouter, Link, Routes, Route  } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Save from "./pages/Save";
import List from "./pages/List";
import { BoardDetail } from './pages/BoardDetail';

function App() {
  return (
    <>
    <h1>Board Project</h1>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail/:id" element={<BoardDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
