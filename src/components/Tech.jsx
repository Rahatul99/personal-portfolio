// import { services } from "../constants";
// import { Tilt } from "react-tilt";
// import { fadeIn, textVariant } from "../utils/motion";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import MyGitHubCalendar from "./GitHubCalendar";


// const ServiceCard = ({ index, title, icon, contents }) => (
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
//         {contents.map((content) => (
//           <p>{content}</p>
//         ))}

//       </div>
//     </motion.div>
//   </Tilt>
// );

// const Tech = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <h2 className={`${styles.sectionHeadText}`}>Technologies</h2>
//       </motion.div>
//       <div className='w-full flex mb-5'>
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
//         >
//           Following projects showcases my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code repositories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.
//         </motion.p>
//       </div>

//       <div className='mt-20 mb-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>


//       <div className='flex flex-row flex-wrap justify-center gap-10'>
//         {technologies.map((technology) => (
//           <div className='w-28 h-28' key={technology.name}>
//             <BallCanvas icon={technology.icon} />
//           </div>
//         ))}
//       </div>


//       {/* -----github calender-------- */}
//       <motion.div variants={textVariant()} className="mt-20 mb-20">
//         <h2 className={styles.sectionHeadText}>GitHub Calendar</h2>
//       </motion.div>

//           {/* <MyGitHubCalendar /> */}
//           <MyGitHubCalendar />
//     </>
//   );
// };

// export default SectionWrapper(Tech, "");












import { SectionWrapper } from "../hoc";
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import MyGitHubCalendar from "./GitHubCalendar";
import { styles } from "../styles";

const ServiceCard = ({ index, title, icon, contents }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <div className="bg-[#090325] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <motion.img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
          whileHover={{ rotate: 360, scale: 1.2 }}
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        {contents.map((content, index) => (
          <p className="text-sm h-0" key={index}>{content}</p>
        ))}
      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className="w-full flex mb-5">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-20 flex flex-wrap gap-10"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row flex-wrap justify-center gap-10"
      >
        {/* Render technologies */}
      </motion.div>

      {/* GitHub Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-20"
      >
        <h2 className={styles.sectionHeadText}>GitHub Calendar</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Render GitHub calendar component */}
        <MyGitHubCalendar />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "technologies");



