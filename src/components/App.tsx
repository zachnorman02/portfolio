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
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/blog" element={<Blog />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
