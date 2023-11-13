import { useEffect } from 'react';
import '../styles/App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Resume from './Resume';
import Classes from "./Classes";
import NotFound from './NotFound';
import Footer from './Footer';
import ReactGA from "react-ga";

const TRACKING_ID = "G-G33T7R2YL3";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Router>
        <div id="page-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
