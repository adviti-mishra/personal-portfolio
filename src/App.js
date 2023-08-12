import "./App.css";
import { BrowserRouter as router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Clubs from "./pages/Clubs";
import Life from "./pages/Life";

function App() {
  return (
    <div className="App">
      {/* In order to define our routes, we use a router component*/}
      <Router>
        {/* When user navigates to path, the route component renders element */}
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/communities" element={<Communities />}></Route>
        <Route path="/life" element={<Life />}></Route>
      </Router>
    </div>
  );
}

export default App;
