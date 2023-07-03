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
            {/* <p className={styles.sectionSubText}></p> */}
            <h2 className={styles.sectionHeadText}>About Me</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 mb-10 text-secondary md:text-[17px] text-justify max-w-3xl leading-[30px]"
          >
            Rahadul Islam is a highly skilled MERN developer with expertise in ReactJS, Node, MongoDB, ExpressJS, HTML, CSS, JavaScript, Bootstrap, Tailwind, Material UI, and DaisyUI. With over 1+ year of experience in web development, Rahadul has a proven track record of creating successful projects. Whether you need a custom web application, Rahadul can bring your vision to life. He is a go-to professional in the web development industry, and his successful portfolio speaks for itself. Rahadul is also easily discoverable through SEO, so don't hesitate to visit his website to learn more about his skills and how he can help you achieve your web development goals.
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