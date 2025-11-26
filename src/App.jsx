import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Experience, Navbar, StarsCanvas, Tech, Works } from './components';
import Hero from './components/hero_component';
import Showreal from './components/Showreal';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetalis';

const App = () => {
  return (
    <HashRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">

        {/* Navbar (fixed) */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Page content below navbar */}
        <div className="pt-20">  {/* Adjust to match navbar height */}
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
              </>
            }/>
            
            <Route path="/experience" element={<Experience />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
          </Routes>

          <Contact />
        </div>

      </div>
    </HashRouter>
  );
};

export default App;
