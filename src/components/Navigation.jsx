import React from "react";

const Navigation = ({ activeSection, isScrolled, scrollToSection }) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <div className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            AD
          </div>
          <div className='hidden md:flex space-x-8'>
            {[
              "home",
              "about",
            //   "experience",
              "skills",
              "projects",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors duration-300 hover:text-blue-600 ${
                  activeSection === item
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
