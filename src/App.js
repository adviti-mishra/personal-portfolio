import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Clubs from "./pages/Clubs";
import Life from "./pages/Life";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* In order to define our routes, we use a router component*/}
      <Router>
        {/* Navbar exists on every page. 
        Placing it here lets it accept things
        from the Router dom like the link component*/}
        <Navbar />
        {/* Routes should only have the Route components*/}
        <Routes>
          {/* When user navigates to path, the route component renders element */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/clubs" element={<Clubs />}></Route>
          <Route path="/life" element={<Life />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
