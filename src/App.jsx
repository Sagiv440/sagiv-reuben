import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from './components';
import Showreal from './components/Showreal';
import Projects from './components/Projects';
import {projects} from './constants/index';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        
        <About />
        <Projects projects={projects}/>
        {/*<Showreal />
        <Experience />
        <Works />*/}
      </div>
    </BrowserRouter>
  );
};

export default App;
