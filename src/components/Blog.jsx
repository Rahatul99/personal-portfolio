import React, { useState } from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Blog = () => {
  const [showMore, setShowMore] = useState([false, false, false]);

  const toggleShowMore = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  return (
    <>
      <div className="mt-5">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Blogs</h2>
        </motion.div>
        <div className="flex flex-wrap gap-10 mt-5 text-secondary md:text-[17px] leading-[30px] w-full">
          {/* Card 1 */}
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="xs:w-[320px] w-full bg-[#090325] rounded-3xl shadow-card"
          >
            {/* Card 1 content */}
            <img
              src="https://images.unsplash.com/photo-1684487747720-1ba29cda82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
              alt="Blog Image"
              className="w-full h-[200px] rounded-lg"
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold">Chat Gpt</h3>
              <p className={`mt-4 text-sm text-justify ${showMore[0] ? "" : "line-clamp-3"}`}>
                Chat GPT, developed by OpenAI, is an advanced language model that is transforming conversational AI. With its natural language understanding and contextual generation abilities, Chat GPT enables engaging and realistic interactions with machines. This powerful technology is reshaping industries such as customer support, content creation, language learning, and personalized recommendations.

                Chat GPT's capabilities empower human-machine communication, unlocking new possibilities for innovation. By refining and responsibly utilizing this technology, we can harness its potential to revolutionize the way we interact with AI systems. With Chat GPT, the future of conversational AI looks promising, offering exciting opportunities for enhanced user experiences and improved efficiency.

                In conclusion, Chat GPT is a game-changer in the field of conversational AI, paving the way for more natural and seamless interactions between humans and machines. Its impact is evident across various industries, and as we continue to explore its potential, we can expect even more groundbreaking advancements in the near future.
              </p>
              {!showMore[0] && (
                <button
                  className="text-blue-500 mt-2 focus:outline-none"
                  onClick={() => toggleShowMore(0)}
                >
                  See More
                </button>
              )}
              {showMore[0] && (
                <>
                  <button
                    className="text-blue-500 mt-2 focus:outline-none"
                    onClick={() => toggleShowMore(0)}
                  >
                    See Less
                  </button>
                </>
              )}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="xs:w-[320px] bg-[#090325] rounded-3xl shadow-card"
          >
            {/* Card 2 content */}
            <img
              src="https://mma.prnewswire.com/media/1739002/Google_Wagtail_Torchbox.jpg?p=publish"
              alt="Blog Image"
              className="w-full h-[200px] rounded-lg"
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold">Google Bird</h3>
              <p className={`mt-4 text-sm text-justify ${showMore[1] ? "" : "line-clamp-3"}`}>
                Google Bird is an innovative project by Google that combines advanced robotics, artificial intelligence, and cutting-edge engineering to create a bird-like drone. It mimics the flight and maneuverability of birds, capturing stunning aerial imagery. With high-resolution cameras and advanced technology, Google Bird offers a unique bird's-eye view of the world.

                Its applications range from mapping and surveying to disaster management and creative pursuits. Google Bird revolutionizes photography and videography, allowing for breathtaking visuals from previously unimaginable perspectives. This innovation showcases the harmony between nature and technology.

                As Google Bird evolves, it promises further advancements in aerial exploration. It opens up new possibilities, expanding our understanding of the planet. Google Bird represents the fusion of nature and technology, pushing the boundaries of what's possible in aerial exploration.
              </p>
              {!showMore[1] && (
                <button
                  className="text-blue-500 mt-2 focus:outline-none"
                  onClick={() => toggleShowMore(1)}
                >
                  See More
                </button>
              )}
              {showMore[1] && (
                <>
                  <button
                    className="text-blue-500 mt-2 focus:outline-none"
                    onClick={() => toggleShowMore(1)}
                  >
                    See Less
                  </button>
                </>
              )}
            </div>
          </motion.div>


          {/* Card 3 */}
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="xs:w-[320px] w-full bg-[#090325] rounded-3xl shadow-card"
          >
            {/* Card 3 content */}
            <img
              src="https://blog.theodo.com/static/ba2166b279b234c4824d1c2fb299ced2/a79d3/ts_logo.png"
              alt="Blog Image"
              className="w-full h-[200px] rounded-lg"
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold">TypeScript</h3>
              <p className={`mt-4 text-sm text-justify ${showMore[2] ? "" : "line-clamp-3"}`}>
                As developers, we usually start a project by adding configurations and scripts for linting, then formatting and type checking for our codebase syntax and style.

                This process is even more important when working on a team because everyone needs to be on the same page for codebase syntax and style. Also, to ensure that there are no typos or bugs when our app is in production, we should type-check our code along the way.

                Having a formatting tool, a linting tool, and TypeScript helps us automate this process.

                In this article, we’ll use ESLint and TypeScript, and we’ll also see how to add Prettier and additional tooling that will automate this process for us.

                Note: There is a compatibility issue with specific versions of Node and the latest versions of ESLint and Prettier, so make sure you’re running a Node version  = 16.0.0 when following the code sections later.

                Compiling TypeScript code
                Typescript is a superset of JavaScript that helps us with static type checking at compile time. TypeScript will give you a better development experience thanks to auto-completion in your editor. TypeScript also helps you maintain the code in your large codebases.

                First, we need a compiler to turn TypeScript code into JavaScript so the browser can read it. Let’s install a dependency using your favorite package manager. Head over to a suitable folder on your computer and run one of the following commands in your terminal:
                "yarn add typescript --dev"
                Upon installation, you’ll see a new entry to the devDependencies attribute of your package.json file as:
                {/* { "name": "Linting TypeScript with ESLint", "version": "1.0.0", "devDependencies": { "typescript": "^4.9.4" } } */}
              </p>
              {!showMore[2] && (
                <button
                  className="text-blue-500 mt-2 focus:outline-none"
                  onClick={() => toggleShowMore(2)}
                >
                  See More
                </button>
              )}
              {showMore[2] && (
                <>
                  <button
                    className="text-blue-500 mt-2 focus:outline-none"
                    onClick={() => toggleShowMore(2)}
                  >
                    See Less
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");
