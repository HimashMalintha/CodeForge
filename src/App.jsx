import React from 'react';

import Header from './components/Header';
import Stats from './components/Stats';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './styles.css';

function App() {
  return (
    <div className="page-container">
      <Header />
      <main>
        <Stats />
        <Projects />
        <About />
        <Skills />
        <Testimonials />
    
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
