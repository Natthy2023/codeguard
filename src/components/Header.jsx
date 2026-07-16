import { useState } from "react";
import logoImg from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="border-t-5 w-full border-[#14B7A5] mx-auto bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-20 md:h-24">
         
          <div className="flex items-center gap-x-2 shrink-0">
            <img 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15 rounded-full object-cover" 
              src={logoImg} 
              alt="code guard logo" 
            />
            <p className="text-xl sm:text-2xl md:text-[1.4em] font-semibold text-gray-800">
              CodeGuard
            </p>
          </div>

          
          <nav className="hidden md:flex items-center gap-x-6 lg:gap-x-10">
            <a 
              className="hover:text-[#14B7A5] text-base lg:text-[1.2em] font-semibold transition duration-200 ease-out py-2" 
              href="#home"
            >
              Home
            </a>
            <a 
              className="hover:text-[#14B7A5] text-base lg:text-[1.2em] font-semibold transition duration-200 ease-out py-2" 
              href="#features"
            >
              Features
            </a>
            <a 
              className="hover:text-[#14B7A5] text-base lg:text-[1.2em] font-semibold transition duration-200 ease-out py-2" 
              href="#packages"
            >
              Packages
            </a>
            <a 
              className="hover:text-[#14B7A5] text-base lg:text-[1.2em] font-semibold transition duration-200 ease-out py-2" 
              href="#help"
            >
              Help
            </a>
            <a 
              className="hover:text-[#14B7A5] text-base lg:text-[1.2em] font-semibold transition duration-200 ease-out py-2" 
              href="#contact"
            >
              Contact Us
            </a>
          </nav>

         
          <div className="hidden md:block shrink-0">
            <button className="bg-[#06926A] px-6 py-2.5 lg:px-8 lg:py-3 rounded-md text-white text-sm lg:text-base font-medium hover:bg-[#056147] transition duration-300 ease-in whitespace-nowrap">
              Sign In
            </button>
          </div>

         
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#14B7A5] focus:outline-none transition duration-200 p-2"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon 
                icon={isOpen ? faX : faBars} 
                className="text-2xl sm:text-3xl"
              />
            </button>
          </div>
        </div>
      </div>

     
      <div 
        className={`
          md:hidden 
          fixed 
          top-20 
          left-0 
          right-0 
          bg-white 
          shadow-lg 
          border-t 
          border-gray-100
          transform 
          transition-all 
          duration-300 
          ease-in-out
          ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
          max-h-[calc(100vh-5rem)]
          overflow-y-auto
        `}
      >
        <nav className="flex flex-col px-4 py-6 space-y-1">
          <a 
            className="hover:text-[#14B7A5] text-lg font-medium transition duration-200 ease-out px-4 py-3 rounded-lg hover:bg-[#14B7A5]/5" 
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>
          <a 
            className="hover:text-[#14B7A5] text-lg font-medium transition duration-200 ease-out px-4 py-3 rounded-lg hover:bg-[#14B7A5]/5" 
            href="#features"
            onClick={closeMenu}
          >
            Features
          </a>
          <a 
            className="hover:text-[#14B7A5] text-lg font-medium transition duration-200 ease-out px-4 py-3 rounded-lg hover:bg-[#14B7A5]/5" 
            href="#packages"
            onClick={closeMenu}
          >
            Packages
          </a>
          <a 
            className="hover:text-[#14B7A5] text-lg font-medium transition duration-200 ease-out px-4 py-3 rounded-lg hover:bg-[#14B7A5]/5" 
            href="#help"
            onClick={closeMenu}
          >
            Help
          </a>
          <a 
            className="hover:text-[#14B7A5] text-lg font-medium transition duration-200 ease-out px-4 py-3 rounded-lg hover:bg-[#14B7A5]/5" 
            href="#contact"
            onClick={closeMenu}
          >
            Contact Us
          </a>
          
        
          <div className="px-4 pt-4 mt-2 border-t border-gray-100">
            <button className="bg-[#06926A] w-full py-3.5 rounded-md text-white font-medium hover:bg-[#056147] transition duration-300 ease-in">
              Sign In
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;