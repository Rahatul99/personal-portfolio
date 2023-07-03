// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const texts = [
//   'MERN Developer',
//   'React Developer',
//   'Node Developer',
// ];

// const Hero = () => {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [currentText, setCurrentText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     let timer;
//     const typingDelay = 200;
//     const deletingDelay = 500;
//     const newTextDelay = 200;

//     const type = () => {
//       const currentIndex = currentTextIndex % texts.length;
//       const fullText = texts[currentIndex];

//       if (isDeleting) {
//         setCurrentText(fullText.substring(0, currentText.length - 1));
//       } else {
//         setCurrentText(fullText.substring(0, currentText.length + 1));
//       }

//       if (!isDeleting && currentText === fullText) {
//         setIsDeleting(true);
//         timer = setTimeout(type, newTextDelay);
//       } else if (isDeleting && currentText === '') {
//         setIsDeleting(false);
//         setCurrentTextIndex(currentTextIndex + 1);
//         timer = setTimeout(type, typingDelay);
//       } else {
//         timer = setTimeout(type, isDeleting ? deletingDelay : typingDelay);
//       }
//     };

//     timer = setTimeout(() => {
//       type();
//     }, typingDelay);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [currentText, currentTextIndex, isDeleting]);

//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text`}>
//             Rahadul Islam
//           </h1>

//           <div className="text-container">
//             <p className={`${styles.heroSubText} mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text`}>
//               {currentText}
//             </p>
//           </div>
//         </div>
//       </div>

//       <ComputersCanvas />

//       {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <div className="w-3 h-3 rounded-full bg-secondary mb-1" />
//           </div>
//         </a>
//       </div> */}
//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;







// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const typewriterText = [
//   'MERN Developer',
//   'React Developer',
//   'Node Developer',
// ];

// const Hero = () => {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [currentText, setCurrentText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     let timer;
//     const typingDelay = 200;
//     const deletingDelay = 500; 
//     const newTextDelay = 2000; 

//     const type = () => {
//       const currentIndex = currentTextIndex % typewriterText.length;
//       const fullText = typewriterText[currentIndex];

//       if (isDeleting) {
//         setCurrentText(fullText.substring(0, currentText.length - 1));
//       } else {
//         setCurrentText(fullText.substring(0, currentText.length + 1));
//       }

//       if (!isDeleting && currentText === fullText) {
//         setIsDeleting(true);
//         timer = setTimeout(type, newTextDelay);
//       } else if (isDeleting && currentText === "") {
//         setIsDeleting(false);
//         setCurrentTextIndex(currentTextIndex + 1);
//         timer = setTimeout(type, typingDelay);
//       } else {
//         timer = setTimeout(type, isDeleting ? deletingDelay : typingDelay);
//       }
//     };

//     timer = setTimeout(() => {
//       type();
//     }, typingDelay);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [currentText, currentTextIndex, isDeleting]);

//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text`}>
//             Rahadul Islam
//           </h1>

//           <div className="text-container">
//             <span className={`${styles.heroSubText} mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text`}>
//               {currentText}
//             </span>
//           </div>
//         </div>
//       </div>

//       <ComputersCanvas />

//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;







// import { styles } from "../styles";
// import Typewriter from 'typewriter-effect';
// import { motion } from "framer-motion";
// import { fadeIn } from "../utils/motion";
// import img from "../assets/pass2.png";

// const typewriterText = [
//   "MERN Developer",
//   "React Developer",
//   "Node Developer",
// ];

// const Hero = () => {
//   const handleResumeDownload = () =>{
//     window.open('https://drive.google.com/u/1/uc?id=1daZvm5je-Du3eqXjhlhsYIEaWmP_05rR&export=download', "_parent")
//   }
//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div className={`absolute inset-0 top-[180px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div className="md:flex items-center gap-2">
//           <div>
//           <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text`}>
//             Rahadul Islam
//           </h1>
//           <div className="text-container font-semibold text-3xl mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text ">
//             <Typewriter
//               options={{
//                 strings: typewriterText,
//                 autoStart: true,
//                 loop: true,
//               }}
//               onInit={(typewriter) => {
//                 typewriter
//                   .pauseFor(1000) // Optional initial pause
//                   .callFunction(() => {
//                     console.log('Typewriter initialized');
//                   })
//                   .start();
//               }}
//             />
//           </div>
//           <motion.p
//             variants={fadeIn("", "", 0.1, 1)}
//             className="mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]"
//           >
//             Rahadul Islam, an experienced MERN developer, specializes in ReactJS, NextJS, MongoDB, and more. With a 3-year track record of delivering successful projects, including custom web apps and WordPress sites, he completed a 3-month internship and currently works with Blendin. To learn more about his portfolio and how he can help you with your web development needs, visit arfat.xyz.
//           </motion.p>

//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <button
//               onClick={handleResumeDownload}
//               className="btn rounded-3xl p-5 mt-5 text-base font-medium cursor-pointer transition-all duration-500 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600"
//               target="_blank"
//             >
//               Download Resume
//             </button>
//           </motion.div>
//           </div>

//           <div className=" w-80 h-80">
//           <motion.img
//             src={img}
//             alt="profile-image"
//             className="w-full h-full object-cover rounded-full"
//             whileHover={{ scale: 1.1 }}
//           />
//         </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;









import { styles } from "../styles";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import img from "../assets/pass2.png";
import { SectionWrapper } from "../hoc";

const typewriterText = [
  "MERN Developer",
  "React Developer",
  "Node Developer",
];

const Hero = () => {
  const handleResumeDownload = () => {
    window.open('https://drive.google.com/u/1/uc?id=1daZvm5je-Du3eqXjhlhsYIEaWmP_05rR&export=download', "_parent")
  }

  return (
    <section className="w-full mx-auto md:h-screen pt-[180px]">
      <div className={`inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-start gap-5`}>
        <div className="md:flex items-center gap-2">
          <div className="w-80 h-80 md:order-2">
            <motion.img
              src={img}
              alt="profile-image"
              className="w-full h-full object-cover rounded-full"
              whileHover={{ scale: 1.1 }}
            />
          </div>

          <div className="md:w-auto flex">
            <div className="hidden md:block mr-5">
              <div className="flex flex-col justify-center items-center mt-5">
                <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                <div className="w-1 sm:h-80 h-40 violet-gradient" />
              </div>
            </div>
            <div className="">
            <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text`}>
              Rahadul Islam
            </h1>
            <div className="text-container font-semibold text-3xl mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              <Typewriter
                options={{
                  strings: typewriterText,
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000) // Optional initial pause
                    .callFunction(() => {
                      console.log('Typewriter initialized');
                    })
                    .start();
                }}
              />
            </div>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Rahadul Islam, an experienced MERN developer, specializes in ReactJS, NextJS, MongoDB, and more. With a 3-year track record of delivering successful projects, including custom web apps and WordPress sites, he completed a 3-month internship and currently works with Blendin. To learn more about his portfolio and how he can help you with your web development needs, visit arfat.xyz.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={handleResumeDownload}
                className="btn rounded-3xl p-5 mt-5 text-base font-medium cursor-pointer transition-all duration-500 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600"
                target="_blank"
              >
                Download Resume
              </button>
            </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


























// import { styles } from "../styles";
// import Typewriter from 'typewriter-effect';
// import { motion } from "framer-motion";
// import { fadeIn } from "../utils/motion";
// import img from "../assets/pass2.png";

// const typewriterText = [
//   "MERN Developer",
//   "React Developer",
//   "Node Developer",
// ];

// const Hero = () => {
//   const handleResumeDownload = () => {
//     window.open('https://drive.google.com/u/1/uc?id=1daZvm5je-Du3eqXjhlhsYIEaWmP_05rR&export=download', "_parent")
//   }

//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div className={`absolute inset-0 top-[180px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center justify-start gap-5`}>
//         <div className="md:flex items-center gap-2">
//           <div className="w-80 h-80 md:order-2">
//             <motion.img
//               src={img}
//               alt="profile-image"
//               className="w-full h-full object-cover rounded-full"
//               whileHover={{ scale: 1.1 }}
//             />
//           </div>

//           <div className="md:w-auto">
//             <div className="text-center">
//               <h1 className={`font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text`}>
//                 Rahadul Islam
//               </h1>
//               <div className="text-container font-semibold text-3xl mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
//                 <Typewriter
//                   options={{
//                     strings: typewriterText,
//                     autoStart: true,
//                     loop: true,
//                   }}
//                   onInit={(typewriter) => {
//                     typewriter
//                       .pauseFor(1000) // Optional initial pause
//                       .callFunction(() => {
//                         console.log('Typewriter initialized');
//                       })
//                       .start();
//                   }}
//                 />
//               </div>
//               <motion.p
//                 variants={fadeIn("", "", 0.1, 1)}
//                 className="mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]"
//               >
//                 Rahadul Islam, an experienced MERN developer, specializes in ReactJS, NextJS, MongoDB, and more. With a 3-year track record of delivering successful projects, including custom web apps and WordPress sites, he completed a 3-month internship and currently works with Blendin. To learn more about his portfolio and how he can help you with your web development needs, visit arfat.xyz.
//               </motion.p>

//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <button
//                   onClick={handleResumeDownload}
//                   className="btn rounded-3xl p-5 mt-5 text-base font-medium cursor-pointer transition-all duration-500 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600"
//                   target="_blank"
//                 >
//                   Download Resume
//                 </button>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
