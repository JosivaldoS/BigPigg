import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Home from "./components/Pages/Home/Home"
import Company from "./components/Pages/Company"
import Contact from "./components/Pages/Contact"
import Projects from "./components/Pages/Projects"
import NewProject from "./components/Pages/NewProject/NewProject"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Container from "./components/Layout/Container/Container";


function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/projects" element={<Projects />} />
            <Route path="/empresa" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>
      </Router>
      <Footer />
    </div>
  );
}

export default App; 
