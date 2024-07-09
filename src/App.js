import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Pages/Home"
import Company from "./components/Pages/Company"
import Contact from "./components/Pages/Contact"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Bem vindo ao BigPigg</h1>
      <Footer />
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/empresa">Company</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/empresa" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 
