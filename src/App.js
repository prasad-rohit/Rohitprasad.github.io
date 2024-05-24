import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
        </Routes>
      </BrowserRouter>
      
  );
}

export default App;
