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
          Rahadul Islam is a highly skilled web developer with expertise in various technologies such as ReactJS, NextJS, Node, MongoDB, ExpressJS, HTML, CSS, JavaScript, Bootstrap, Tailwind, Material UI, and DaisyUI. With almost one year of experience in web development, he has created numerous successful projects. His successful portfolio speaks for his skills and creativity. Don't hesitate to visit his website and learn more about his skills and how he can help you achieve your web development goals.
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