import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Notfound from "./Notfound";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <center>
            <button id="nav1">
              <Link to="/">Home </Link>
            </button>
            <button id="nav2">
              <Link to="/Component1">Component1</Link>
            </button>
            <button id="nav3">
              <Link to="/Component2">Component2</Link>
            </button>
          </center>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Component1" element={<Component1 />}></Route>
          <Route path="/Component2" element={<Component2 />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
