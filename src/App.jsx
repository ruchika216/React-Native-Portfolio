import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Footer from "./components/common/Footer";
import TopDrawerNavbar from "./components/common/Navbar";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectInfo from "./pages/ProjectInfo";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <TopDrawerNavbar />

        {/* Page Content */}
        <div style={{ minHeight: "calc(100vh - 100px)", paddingTop: "50px" }}>
          {" "}
          {/* Adjust height for Footer */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectInfo />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
