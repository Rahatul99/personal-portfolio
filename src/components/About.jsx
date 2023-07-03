// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { Tilt } from "react-tilt";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
//       >
//         I'm a skilled software developer with experience in TypeScript and
//         JavaScript, and expertise in frameworks like React, Node.js, and
//         Three.js. I'm a quick learner and collaborate closely with clients to
//         create efficient, scalable, and user-friendly solutions that solve
//         real-world problems. Let's work together to bring your ideas to life!
//       </motion.p>

//       <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");


















// import { styles } from "../styles";
// import { motion } from "framer-motion";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import img from "../assets/pass2.png";


// const About = () => {
//   return (
//     <>
//       <div className="md:flex justify-between">
//         <div className="w-[calc(50%-2rem)]">
//           <motion.div variants={textVariant()}>
//             <p className={styles.sectionSubText}></p>
//             <h2 className={styles.sectionHeadText}>About Me</h2>
//           </motion.div>

//           <motion.p
//             variants={fadeIn("", "", 0.1, 1)}
//             className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
//           >
//             Rahadul Islam, an experienced MERN developer, specializes in ReactJS, MongoDB, and more. With a year track record of successful learning,he completed a 3-month internship and currently works with Blendin. To learn more about his portfolio and how he can help you with your web development needs, visit arfat.xyz.
//           </motion.p>
//         </div>
//         <button>Download Cv</button>

//         <div className="flex justify-center items-center w-80 h-80">
//           <img
//             src={img}
//             alt="profile-image"
//             className="w-full h-full object-cover rounded-full"
//             whileHover={{ scale: 1.1 }}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");









import { TimeLineData } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const About = () => {

  return (
    <>
      <div>
        <div className="w-[calc(100%-2rem)]">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}></p>
            <h2 className={styles.sectionHeadText}>About Me</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 mb-10 text-secondary md:text-[17px] text-justify max-w-3xl leading-[30px]"
          >
            Arfatur Rahman is a highly skilled MERN developer with expertise in ReactJS, NextJS, Sanity, Node, MongoDB, ExpressJS, HTML, CSS, JavaScript, WordPress, Bootstrap, Tailwind, Material UI, and DaisyUI. With over 3+ years of experience in web development, Arfat has a proven track record of creating successful projects for clients. Whether you need a custom web application or a WordPress website, Arfat can bring your vision to life. He is a go-to professional in the web development industry, and his successful portfolio speaks for itself. Arfat is also easily discoverable through SEO, so don't hesitate to visit his website to learn more about his skills and how he can help you achieve your web development goals.
          </motion.p>
        </div>
      </div>
      <div className="grid mt-20 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        {TimeLineData[0]?.year &&
          TimeLineData?.map((item, index) => (
            <div key={index} className="my-4">
              <div className="bg-transparent border-none">
                <div className="px-4 py-2">
                  <span className="text-xl font-bold">{item.year}</span>
                  <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mt-2" />
                </div>
                <div className="px-4 py-2">
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");





// import { TimeLineData } from "../constants";
// import { styles } from "../styles";
// import { motion } from "framer-motion";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const About = () => {
//   return (
//     <>
//       <div className="mt-10">
//         <div className="w-[calc(50%-2rem)]">
//           <motion.div variants={textVariant()}>
//             <p className={styles.sectionSubText}></p>
//             <h2 className={styles.sectionHeadText}>About Me</h2>
//           </motion.div>

//           <motion.p
//             variants={fadeIn("", "", 0.1, 1)}
//             className="mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]"
//           >
//             Arfatur Rahman is a highly skilled MERN developer with expertise in ReactJS, NextJS, Sanity, Node, MongoDB, ExpressJS, HTML, CSS, JavaScript, WordPress, Bootstrap, Tailwind, Material UI, and DaisyUI. With over 3+ years of experience in web development, Arfat has a proven track record of creating successful projects for clients. Whether you need a custom web application or a WordPress website, Arfat can bring your vision to life. He is a go-to professional in the web development industry, and his successful portfolio speaks for itself. Arfat is also easily discoverable through SEO, so don't hesitate to visit his website to learn more about his skills and how he can help you achieve your web development goals.
//           </motion.p>
//         </div>
//       </div>
//       <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
//         {TimeLineData[0]?.year &&
//           TimeLineData?.map((item, index) => (
//             <div key={index} className="my-4">
//               <div className="bg-transparent border-none">
//                 <div className="px-4 py-2">
//                   <span className="text-xl font-bold">{item.year}</span>
//                   <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mt-2" />
//                 </div>
//                 <div className="px-4 py-2">
//                   <p>{item.text}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");










































// import { TimeLineData } from "../constants";
// // ------------------


// import { styles } from "../styles";
// import { motion } from "framer-motion";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import img from "../assets/pass2.png";
// import { Link } from "react-router-dom";
// import GitHubCalendar from "./GitHubCalendar";


// const About = () => {

//   return (
//     <>
//       <div className="md:flex justify-between items-center">
//         <div className="w-[calc(50%-2rem)]">
//           <motion.div variants={textVariant()}>
//             <p className={styles.sectionSubText}></p>
//             <h2 className={styles.sectionHeadText}>About Me</h2>
//           </motion.div>

//           <motion.p
//             variants={fadeIn("", "", 0.1, 1)}
//             className="mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px]"
//           >
//             Arfatur Rahman is a highly skilled MERN developer with expertise in ReactJS, NextJS, Sanity, Node, MongoDB, ExpressJS, HTML, CSS, JavaScript, WordPress, Bootstrap, Tailwind, Material UI, and DaisyUI. With over 3+ years of experience in web development, Arfat has a proven track record of creating successful projects for clients. Whether you need a custom web application or a WordPress website, Arfat can bring your vision to life. He is a go-to professional in the web development industry, and his successful portfolio speaks for itself. Arfat is also easily discoverable through SEO, so don't hesitate to visit his website to learn more about his skills and how he can help you achieve your web development goals.
//           </motion.p>

//           {/* <motion.div
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Link
//               to="https://drive.google.com/file/d/1daZvm5je-Du3eqXjhlhsYIEaWmP_05rR/view?usp=drive_link"
//               className="btn rounded-3xl p-5 mt-5 text-base font-medium cursor-pointer transition-all duration-500 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600"
//               target="_blank"
//             >
//               Download Resume
//             </Link>
//           </motion.div> */}

//         </div>

//         {/* <div className=" w-80 h-80">
//           <motion.img
//             src={img}
//             alt="profile-image"
//             className="w-full h-full object-cover rounded-full"
//             whileHover={{ scale: 1.1 }}
//           />
//         </div> */}
//       </div>









//       {/* ------------------ */}

//       <div className="grid mt-20 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
//         {TimeLineData[0]?.year &&
//           TimeLineData?.map((item, index) => (
//             <div key={index} className="my-4">
//               <div className="bg-transparent border-none">
//                 <div className="px-4 py-2">
//                   <span className="text-xl font-bold">{item.year}</span>
//                   <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mt-2" />
//                 </div>
//                 <div className="px-4 py-2">
//                   <p>{item.text}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>



//       {/* ------------------ */}

//     </>
//   );
// };

// export default SectionWrapper(About, "about");
