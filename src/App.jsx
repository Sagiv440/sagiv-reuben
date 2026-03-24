import React, { useState } from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/hero_component';
import HomePage from './components/HomePage';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetalis';
import Contact from './components/Contact'
import { SearchProvider } from './utils/SearchContext';


const App = () => {

  const [scrollid, setScrollid] = useState('');
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <SearchProvider>
      <HashRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <div className="relative z-0 bg-primary">

          {/* Navbar (fixed) */}
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center fixed top-0 left-0 w-full z-50">
            <Navbar ScrollPassthrough={setScrollid} />
          </div>

          {/* Page content below navbar */}
          <div className="pt-20">  {/* Adjust to match navbar height */}
            <Routes>
              <Route path="/" element={
                <HomePage id={scrollid}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectId" element={<ProjectDetails />} />
            </Routes>

            <Contact />
          </div>

        </div>
      </HashRouter>
    </SearchProvider>
  );
};

export default App;
