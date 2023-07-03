import { styles } from "../styles";
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import img from "../assets/pass2.png";

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
    <section className="w-full mx-auto md:h-screen md:pt-[180px] pt-[100px]">
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
                Rahadul Islam, an experienced MERN developer, specializes in ReactJS, MongoDB, and more. With almost one year track record of delivering successful projects. To learn more about his portfolio and how he can help you with your web development needs, visit <a href="https://rahadul-islam-portfolio.web.app">Rahadul Islam</a>.
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