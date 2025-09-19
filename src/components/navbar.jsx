import { useState } from "react";
import clsx from "clsx";
import { Home, Instagram, Menu, X, Facebook } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (url, isExternal = false) => {
    if (isExternal) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
    setIsOpen(false);
  };

  return (
    <header
      className={clsx(
        "fixed top-0 md:top-6 left-1/2 transform -translate-x-1/2 z-40 w-full md:w-[30rem]"
      )}
    >
      {/* Gradient Border Container */}
      <div className="relative p-[2px] bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300 md:rounded-2xl">
        {/* Main Navigation Container */}
        <nav className="relative flex items-center justify-between bg-white/90 backdrop-blur-md md:rounded-2xl px-4 py-4 md:py-3 shadow-lg">
          {/* Left: Home button */}
          <button
            onClick={() => handleNavigation("/")}
            className="md:hidden p-2 hover:bg-pink-100/60 rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer group"
          >
            <Home
              size={20}
              className="text-pink-400 group-hover:text-purple-600 transition-colors"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleNavigation("/")}
              className="p-2 hover:bg-pink-100/60 rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer group"
            >
              <Home
                size={20}
                className="text-pink-400 group-hover:text-purple-600 transition-colors"
              />
            </button>

            <div className="w-px h-8 bg-gradient-to-b from-pink-300 to-purple-300 mx-6"></div>

            <button
              onClick={() => handleNavigation("", true)}
              className="p-2 hover:bg-pink-100/60 rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-pink-400 group-hover:text-purple-600 transition-colors"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.35l-5.214-6.816-5.96 6.816H1.868l7.73-8.84L1.5 2.25h7.847l4.713 6.231 4.184-6.231zM16.35 20.2h1.833L7.68 4.71H5.71l10.64 15.49z" />
              </svg>
            </button>

            <button
              onClick={() => handleNavigation("", true)}
              className="p-2 hover:bg-pink-100/60 rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer group"
            >
              <Instagram
                size={20}
                className="text-pink-400 group-hover:text-purple-600 transition-colors"
              />
            </button>

            <button
              onClick={() => handleNavigation("", true)}
              className="p-2 hover:bg-pink-100/60 rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer group"
            >
              <Facebook
                size={20}
                className="text-pink-400 group-hover:text-purple-600 transition-colors"
              />
            </button>

            <button
              onClick={() => handleNavigation("", true)}
              className="p-2 hover:bg-pink-100/60 rounded-lg transition-all duration-300 transform hover:scale-110 cursor-pointer group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-pink-400 group-hover:text-purple-600 transition-colors"
              >
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-1.032-.084C5.143 9.321 2 12.464 2 16.543 2 20.622 5.143 23.766 9.222 23.766c4.079 0 7.217-3.144 7.217-7.223V9.071a7.26 7.26 0 0 0 4.19 1.305v-3.69h-.04z" />
              </svg>
            </button>

            <div className="w-px h-8 bg-gradient-to-b from-pink-300 to-purple-300 mx-3"></div>

            {/* Blog button */}
            <button
              onClick={() => handleNavigation("/blog")}
              className="flex items-center gap-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-xl font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-102 cursor-pointer shadow-lg hover:shadow-pink-200"
            >
              <span>My </span> <span className="hidden md:block">Blog</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-pink-100/60 transition-all duration-300 cursor-pointer group"
          >
            {isOpen ? (
              <X
                size={22}
                className="text-pink-600 group-hover:text-purple-600 transition-colors"
              />
            ) : (
              <Menu
                size={22}
                className="text-pink-600 group-hover:text-purple-600 transition-colors"
              />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown with Gradient Border */}
      {isOpen && (
        <div className="md:hidden relative mt-0.5">
          <div className="p-[2px] bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400">
            <div className="bg-white/95 backdrop-blur-md flex flex-col items-start px-6 py-3 space-y-5">
              <button
                onClick={() => handleNavigation("", true)}
                className="flex items-center gap-2 text-pink-600 hover:text-purple-600 transition-all w-full text-left hover:bg-pink-50 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.35l-5.214-6.816-5.96 6.816H1.868l7.73-8.84L1.5 2.25h7.847l4.713 6.231 4.184-6.231zM16.35 20.2h1.833L7.68 4.71H5.71l10.64 15.49z" />
                </svg>
                Twitter
              </button>

              <button
                onClick={() => handleNavigation("", true)}
                className="flex items-center gap-2 text-pink-600 hover:text-purple-600 transition-all w-full text-left hover:bg-pink-50 p-2 rounded-lg"
              >
                <Facebook size={18} /> Facebook
              </button>

              <button
                onClick={() => handleNavigation("", true)}
                className="flex items-center gap-2 text-pink-600 hover:text-purple-600 transition-all w-full text-left hover:bg-pink-50 p-2 rounded-lg"
              >
                <Instagram size={18} /> Instagram
              </button>

              <button
                onClick={() => handleNavigation("", true)}
                className="flex items-center gap-2 text-pink-600 hover:text-purple-600 transition-all w-full text-left hover:bg-pink-50 p-2 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-1.032-.084C5.143 9.321 2 12.464 2 16.543 2 20.622 5.143 23.766 9.222 23.766c4.079 0 7.217-3.144 7.217-7.223V9.071a7.26 7.26 0 0 0 4.19 1.305v-3.69h-.04z" />
                </svg>
                TikTok
              </button>

              {/* Blog button */}
              <button
                onClick={() => handleNavigation("/blog")}
                className="flex items-center gap-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-xl font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-102 cursor-pointer w-full shadow-lg hover:shadow-pink-200"
              >
                <span className="text-center mx-auto">Blog</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
