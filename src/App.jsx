import React from 'react';
import { Route, Routes, useParams } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Navbar, StarsCanvas, Tech, Works } from './components';
import Hero from './components/hero_component'
import Showreal from './components/Showreal';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetalis';

const App = () => {
  return (
    <BrowserRouter
  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}
>
  <div className="relative z-0 bg-primary">

    {/* FIX: Add padding below navbar */}
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center fixed top-0 left-0 w-full z-50">
      <Navbar />
    </div>

    {/* Everything below the navbar */}
    <div className="pt-20">  {/* 👈 Adjust this height to match your navbar */}
      <Routes>
        <Route path="/sagiv-reuben/" element={
          <>
            <Hero />
            <About />
          </>
        }/>
        
        <Route path="/sagiv-reuben/Experience" element={<Experience />}/>
        <Route path="/sagiv-reuben/Projects" element={<Projects />}/>
        <Route path="/sagiv-reuben/projects/:projectId" element={<ProjectDetails />} />
      </Routes>

      <Contact />
    </div>

  </div>
</BrowserRouter>

  );
};

export default App;
