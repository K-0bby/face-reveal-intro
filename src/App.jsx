import "./index.css";
import BackgroundCircles from "./components/background-circles";
import Navbar from "./components/navbar";

import { useState } from "react";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden">
        <BackgroundCircles />
        <div>
          <div
            className="me me-con relative -mx-9 my-6 md:mx-4 lg:mx-5 md:my-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div class="me-body"></div>
            <div class="me-ponytail"></div>
            <div class="me-hair"></div>
            <div class="me-head"></div>
            <div class="me-bangs"></div>
            <div class="me-face">
              <div class="eyes"></div>
              <div class="cheeks"></div>
            </div>
          </div>
          {/* Chat Bubble - Appears on Hover */}
          {isHovered && (
            <div className="absolute top-[32rem] sm:top-[33rem] md:top-[30rem] lg:top-[34rem] right-0 md:right-16 lg:right-[31rem] z-100 animate-fadeInScale">
              {/* Chat Bubble with Gradient Border */}
              <div className="relative">
                {/* Gradient Border Container */}
                <div className="p-[2px] bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 rounded-xl sm:rounded-2xl animate-pulse-slow">
                  {/* Chat Content */}
                  <div className="relative bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 shadow-2xl min-w-[100px] sm:min-w-[240px] md:min-w-[280px] max-w-[240px] sm:max-w-[280px] md:max-w-[320px]">
                    {/* Chat Header */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-pink-200">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs sm:text-sm font-bold">
                          ✨
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-xs sm:text-sm">
                          Hey there! 👋
                        </h3>
                        <p className="text-xs text-pink-500 hidden sm:block">
                          Online now
                        </p>
                      </div>
                    </div>

                    {/* Chat Messages - Reduced for mobile */}
                    <div className="space-y-2 sm:space-y-3">
                      {/* Message 1 - Always show */}
                      <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-1 md:p-3 rounded-lg sm:rounded-xl rounded-tl-sm sm:rounded-tl-md">
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          Welcome to my space! ✨ <br />
                          <span>I'm Marian Kelce Walter</span> <br />
                          <span className="hidden md:inline">
                            I'm so excited you're here!
                          </span>
                        </p>
                        <span className="text-xs text-pink-400 mt-1 hidden sm:block text-right">
                          Just now
                        </span>
                      </div>

                      {/* Message 2 - Hide on mobile */}
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-2 sm:p-3 rounded-lg sm:rounded-xl rounded-tl-sm sm:rounded-tl-md block">
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          I love connecting with amazing people like you! 💕
                        </p>
                        <span className="text-xs text-purple-400 mt-1 hidden md:block text-right">
                          Just now
                        </span>
                      </div>

                      {/* Message 3 - Hide on mobile */}
                      <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-2 sm:p-3 rounded-lg sm:rounded-xl rounded-tl-sm sm:rounded-tl-md hidden md:block">
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          Feel free to explore and don't forget to say hi! 🌸
                        </p>
                        <span className="text-xs text-rose-400 mt-1 block text-right">
                          Just now
                        </span>
                      </div>
                    </div>

                    {/* Typing Indicator - Simplified for mobile */}
                    <div className="mt-3 sm:mt-4 flex items-center gap-2 text-pink-500">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-rose-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-xs text-pink-400">typing...</span>
                    </div>

                    {/* Quick Actions - Simplified for mobile */}
                    <div className="mt-3 sm:mt-4 flex gap-1 sm:gap-2">
                      <button className="flex-1 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-xs py-1.5 sm:py-2 px-2 sm:px-3 rounded-md sm:rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-200 transform hover:scale-105">
                        <span className="sm:hidden">Hi! 👋</span>
                        <span className="hidden sm:inline">Say Hi! 👋</span>
                      </button>
                      <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs py-1.5 sm:py-2 px-2 sm:px-3 rounded-md sm:rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-200 transform hover:scale-105">
                        💕
                      </button>
                    </div>
                  </div>
                </div>

                {/* Chat Bubble Tail - Responsive */}
                <div className="absolute -left-2 sm:-left-3 top-6 sm:top-8 w-0 h-0 border-t-[8px] sm:border-t-[12px] border-t-transparent border-r-[12px] sm:border-r-[16px] border-r-pink-400 border-b-[8px] sm:border-b-[12px] border-b-transparent"></div>
                <div className="absolute -left-1 sm:-left-2 top-6 sm:top-8 w-0 h-0 border-t-[6px] sm:border-t-[10px] border-t-transparent border-r-[10px] sm:border-r-[14px] border-r-white border-b-[6px] sm:border-b-[10px] border-b-transparent"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
