import React from 'react';
import '../styles/App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Resume from './Resume';
import Classes from "./Classes";
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/resume" element={<Resume />} />
            <Route path="/portfolio/classes" element={<Classes />} />
            <Route path="/portfolio/blog" element={<Blog />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
