import React, { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-[9999] p-3 bg-green-600 text-white transition-all duration-300 hover:bg-green-700 focus:ring-4 focus:ring-green-300 ${
          showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      {/* Footer Content */}
      <footer className="border-t-4 border-green-700 bg-white py-8 dark:bg-black">
        <div className="max-w-screen-xl mx-auto px-4 md:flex md:items-start md:justify-between md:gap-8">
          <div className="max-w-md">
            <span className="block text-sm font-semibold uppercase tracking-[0.25em] text-green-600 dark:text-green-400">
              Sp1der04
            </span>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Incident forensics, investigations, CTFs, and security engineering built into one portfolio.
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Sp1der04. All Rights Reserved.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-700 dark:text-gray-200">
              Navigate
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-500 dark:text-gray-400 sm:grid-cols-3">
              <li><a href="/#home" className="hover:underline">Home</a></li>
              <li><a href="/#whoami" className="hover:underline">Whoami</a></li>
              <li><a href="/#services" className="hover:underline">Services</a></li>
              <li><a href="/#contact" className="hover:underline">Contact</a></li>
              <li><a href="/investigations.html" className="hover:underline">Investigations</a></li>
              <li><a href="/#ctfs" className="hover:underline">CTFs</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;