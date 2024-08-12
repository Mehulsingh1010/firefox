import React from "react";
import { motion } from "framer-motion";
import img from "./firefox.jpg"; 

const Homepage = () => {

  const headerText = "SAY NO TO RAGGING";
  const footerText = "At VIT-Bhopal, we are dedicated to creating a safe and respectful campus environment. Our commitment to anti-ragging measures ensures that every student feels supported and valued. This website serves as a resource for understanding the importance of preventing ragging and provides essential tools for reporting incidents and seeking help. Your safety and well-being are our top priority.";

  const splitText = (text) => text.split(" ").map((word, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="inline-block mx-1"
    >
      {word}
    </motion.span>
  ));

  return (
    <>
      <div className="bg-red-600 h-screen w-full flex flex-col">
        <header className="h-[15vh] text-center flex items-center justify-center bg-black">
          <h1 className="font-extrabold text-white text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide">
            {splitText(headerText)}
          </h1>
        </header>

        <div className="relative flex flex-col items-center justify-center flex-1 py-8">
          <img
            className="h-[400px] w-auto object-cover rounded-lg shadow-lg"
            src="https://i.pinimg.com/564x/c4/db/a0/c4dba016220a30dd515b6955f5994b3a.jpg"
            alt="Sample Image"
          />
        </div>

        <footer className="bg-black text-white text-center py-8">
          <div className="max-w-4xl mx-auto px-4">
            {splitText(footerText).map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="inline-block mx-1"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </footer>
      </div>

      <div className="h-screen bg-black flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mt-[-100px] mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Take Action Against Ragging
        </motion.h1>
        <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto mb-12">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between w-full mb-6 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <img
              className="w-full lg:w-[60%] h-[400px] object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
              src="https://i.pinimg.com/564x/68/11/1d/68111dc5f683517a1e2a296a247e71cc.jpg"
              alt="Action"
            />
            <div className="w-full lg:w-[40%] text-center lg:text-left">
              <h3 className="text-lg text-white p-2 md:text-xl lg:text-2xl font-semibold mb-4">
                Raise your voice, report ragging cases now!
              </h3>
              <a
                href=""
                className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
              >
                Report Ragging
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="w-full lg:w-[40%] text-center lg:text-right lg:pl-6 mb-6 lg:mb-0">
              <h3 className="text-lg mr-[10px] text-white p-2 md:text-xl lg:text-2xl font-semibold mb-4">
                Know your rights!
              </h3>
              <a
                href=""
                className="bg-red-600 mr-[10px] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
              >
                Know your rights
              </a>
            </div>
            <img
              className="w-full lg:w-[60%] h-[400px] object-cover rounded-lg"
              src={img}
              alt="Rights"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-black mt-[-150px] pb-[60px] px-4">
        <h2 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
          Watch Our Informative Video
        </h2>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iK3ns2zQV8U?pp=ygUMYW50aSByYWdnaW5n" 
            title="Informative Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Homepage;
