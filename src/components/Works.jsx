import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./modal.css"

const ProjectCard = ({
  index,
  name,
  description,
  github_client,
  github_server,
  Live_link,
  tags,
  image,
  source_code_link,
  features
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const zoomVariants = {
    zoomed: {
      scale: 1.1,
    },
    normal: {
      scale: 1,
    },
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <motion.div
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          initial="normal"
          animate={isHovered ? "zoomed" : "normal"}
          variants={zoomVariants}
          transition={{ duration: 0.3 }}
          className="bg-[#090325] p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            {/* <img src={image} alt="project_image" className="w-full h-full object-cover object-top transition-all duration-1000 ease-in-out" /> */}

            <div className="w-full h-[240px] overflow-hidden ">
            <img src={image} alt="project_image" className="w-[100%] h-[100%] object-cover object-top transition-all ease-in-out duration-1000 hover:object-bottom" />
            </div>


            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer
                bg-gray-950 hover:bg-purple-900 hover:scale-150 transform focus:outline-none focus:outline-solid focus:outline-transparent duration-500 focus:shadow-outline-purple"
                title="Github Client Side"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                  title="Github Client side"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
            <button
              className="btn bg-gray-900 p-3 mt-2 rounded-xl hover:bg-purple-950 transition-colors duration-500 text-sm"
              onClick={handleModalOpen}
            >
              View Details
            </button>
            <a
              href={Live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gray-900 p-3 ml-2 mt-2 rounded-xl hover:bg-purple-950 transition-colors duration-500 text-sm"
            >
              Live Link
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        center
        classNames={{
          modal: "custom-modal, modal-content",
          overlay: "custom-overlay",
        }}
      >
        <div className="left-0">
          <h2 className="font-extrabold">{name}</h2>
          <hr />
          <p>{description}</p>
          <p>{features}</p>
          <p>Github Client: <a className="text-blue-500" href={github_client}>{github_client}</a></p>
          <p>Github Server: <a className="text-blue-500" href={github_server}>{github_server}</a></p>
          <p>Live Link: <a className="text-blue-500" href={Live_link}>{Live_link}</a></p>
        </div>
      </Modal>
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");




