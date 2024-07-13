import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../img/logo.png'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 w-full bg-white border-b shadow-lg">
      <div className="flex items-center justify-between px-4 py-4 max-h-20 lg:px-8">

      <ScrollLink 
      to='home'
      spy={true} 
      smooth={true} 
      duration={500}>
      <img src={logo} alt='' className=' h-10 w-10 mr-40 cursor-pointer'/>

        </ScrollLink>
                {/* Left section */}
        <div className="flex items-center gap-4 text-sm lg:text-md">
        <ScrollLink 
          to="about" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className="px-3 py-2  nav-sans text-gray-900 hover:text-[#1977cc]  cursor-pointer relative  group">
          About
          <span className="absolute bottom-0 left-0 w-0 min-h-0.5 bg-[#1977cc] transition-all duration-300 ease-out group-hover:w-full"></span> 
         </ScrollLink>

          
          <ScrollLink 
            to="doc" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="px-3 py-2 nav-sans  text-gray-900 hover:text-[#1977cc] cursor-pointer relative  group">
            Doctor
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1977cc] transition-all duration-300 ease-out group-hover:w-full"></span> 

          </ScrollLink>
          
          <ScrollLink 
            to="service" 
            spy={true} 
            smooth={true} 
            duration={500} 
          className="px-3 py-2 nav-sans  text-gray-900 hover:text-[#1977cc] cursor-pointer relative  group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1977cc] transition-all duration-300 ease-out group-hover:w-full"></span> 

          </ScrollLink>

          <ScrollLink 
            to="testi" 
            spy={true} 
            smooth={true} 
            duration={500} 
          className="px-3 py-2 nav-sans  text-gray-900 hover:text-[#1977cc] cursor-pointer relative  group">
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1977cc] transition-all duration-300 ease-out group-hover:w-full"></span> 

          </ScrollLink>

          <ScrollLink 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500} 
          className="px-3 py-2 nav-sans  text-gray-900 hover:text-[#1977cc] cursor-pointer relative  group">
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1977cc] transition-all duration-300 ease-out group-hover:w-full"></span> 

          </ScrollLink>
        </div>

        {/* Right section */}
        <div className="ml-auto flex gap-4">
          <ScrollLink 
            to="app" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="px-3 py-2 chivo-mono  rounded-full transition duration-500 ease-in-out bg-[#1977cc] text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-bg-[#1977cc] focus:ring-opacity-50 transform hover:scale-105 cursor-pointer">
            Book An Appointment
          </ScrollLink>
          <button           
           className="px-3 py-2 chivo-mono  rounded-full transition duration-500 ease-in-out bg-[#1977cc] text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-bg-[#1977cc] focus:ring-opacity-50 transform hover:scale-105 cursor-pointer">

            <span>Log In</span>
          </button>
          <button            
           className="px-3 py-2 chivo-mono  rounded-full transition duration-500 ease-in-out bg-[#1977cc] text-white  hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-bg-[#1977cc] focus:ring-opacity-50 transform hover:scale-105 cursor-pointer">

            <span>Sign in</span>
          </button>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
