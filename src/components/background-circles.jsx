import React from "react";
import { motion } from "motion/react";
import sunflowerImg from "../assets/sunflower.png";
import chocolateIceCreamImg from "../assets/chocolate-ice-cream.svg";
import teddyBearImg from "../assets/teddy-bear.png";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center w-full h-full overflow-hidden"
    >
      {/* First circle - responsive ping animation */}
      <div className="absolute border border-pink-300 rounded-full h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] mt-32 sm:mt-44 md:mt-52 animate-ping flex items-center justify-center"></div>

      {/* Second circle with chocolate ice cream - uncommented and responsive */}
      {/* <motion.div 
        className="border border-[#333333] rounded-full h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] md:h-[200px] md:w-[200px] absolute mt-32 sm:mt-44 md:mt-52 flex items-center justify-center"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.img
          src={chocolateIceCreamImg}
          alt="Chocolate Ice Cream"
          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain absolute -top-3 sm:-top-4 md:-top-5"
          animate={{
            rotate: 360,
            y: [-5, 5, -5],
          }}
          transition={{
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </motion.div> */}

      {/* Third circle with ice cream - positioned differently */}
      <motion.div
        className="border border-purple-300  rounded-full h-[210px] w-[210px] sm:h-[280px] sm:w-[280px] md:h-[350px] md:w-[350px] absolute mt-32 sm:mt-44 md:mt-52 flex items-center justify-center"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.img
          src={chocolateIceCreamImg}
          alt="Teddy Bear"
          className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 object-contain absolute -right-4 sm:-right-5 md:-right-7"
          animate={{
            rotate: 0,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </motion.div>

      {/* Fourth circle with sunflower - responsive */}
      <motion.div
        className="border border-[#f1f101ea] rounded-full opacity-20 h-[390px] w-[390px] sm:h-[520px] sm:w-[520px] md:h-[650px] md:w-[650px] absolute mt-32 sm:mt-44 md:mt-52 animate-pulse flex items-center justify-center"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.img
          src={sunflowerImg}
          alt="Sunflower"
          className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-contain absolute -bottom-4 sm:-bottom-5 md:-bottom-6"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </motion.div>

      {/* Fifth circle with teddy bear - responsive */}
      <motion.div
        className="border border-rose-200 rounded-full h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] absolute mt-32 sm:mt-44 md:mt-52 flex items-center justify-center"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.img
          src={teddyBearImg}
          alt="Teddy Bear"
          className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-contain absolute left-0 top-16 md:top-28"
          animate={{
            rotate: 180,
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default BackgroundCircles;