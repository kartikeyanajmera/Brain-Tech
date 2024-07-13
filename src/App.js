import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import About from './Component/WebPage/About';
import Home from './Component/WebPage/Home';
import Doctor from './Component/WebPage/Doctor';
import Service from './Component/WebPage/Service';
import Appont from './Component/WebPage/Appont';
import Contact from './Component/WebPage/Contact';
import Navbar from './Component/WebPage/Navbar';
import Testimonials from './Component/WebPage/Testimonials';
import Faq from './Component/WebPage/Faq';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route 
          path='/'
          element={
            <>
              <Element name="home">
                <Home />
              </Element>

              <Element name="about">
                <About />
              </Element>

              <Element name="doc">
                <Doctor />
              </Element>

              <Element name="app">
                <Appont />
              </Element>

              <Element name="service">
                <Service />
              </Element>

              <Element name="testi">
                <Testimonials />
              </Element>

              <Element name="faq">
                <Faq />
              </Element>

              <Element name="contact">
                <Contact />
              </Element>
            </>
          }
        />
        <Route path='/home' element={<Home />} />

        <Route path='/doc' element={<Doctor />} />
        <Route path='/app' element={<Appont />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/testi' element={<Testimonials />} />
        <Route path='/faq' element={<Faq />} />

      </Routes>
    </div>
  );
}

export default App;
