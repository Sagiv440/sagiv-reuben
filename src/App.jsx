import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Navbar, StarsCanvas, Tech, Works } from './components';
import Hero from './components/hero_component'
import TechHero from './components/tech_hero_component'
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
        <Hero/>
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
