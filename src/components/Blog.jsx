// import { useState } from "react";
// import { motion } from "framer-motion";
// import { textVariant, fadeIn } from "../utils/motion";
// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";

// const Blog = () => {
//     const [showMore, setShowMore] = useState(false);

//     const toggleShowMore = () => {
//         setShowMore(!showMore);
//     };

//     const toggleShowLess = () => {
//         setShowMore(false);
//     };

//     return (
//         <>
//             <div className="mt-5">
//                 <motion.div variants={textVariant()}>
//                     <h2 className={styles.sectionHeadText}>Blogs</h2>
//                 </motion.div>
//                 <div className="flex flex-wrap gap-10 mt-5">
//                     {/* Card 1 */}
//                     <motion.div
//                         variants={fadeIn("right", "spring", 0.5, 0.75)}
//                         className="xs:w-[320px] w-full bg-tertiary rounded-3xl shadow-card"
//                     >
//                         <img
//                             src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80"
//                             alt="Blog Image"
//                             className="w-full h-[200px] rounded-lg"
//                         />
//                         <div className="p-5">
//                             <h3 className="text-2xl font-bold">Script To Use Chat Gpt At Scale</h3>
//                             <p className={`mt-4 ${showMore ? "" : "line-clamp-3"}`}>
//                             We wanted to get categories for products just by product name. So instead of training our own AI model we tried chat GPT and are very happy with the results.
//                             </p>
//                             {!showMore && (
//                                 <button
//                                     className="text-blue-500 mt-2 focus:outline-none"
//                                     onClick={toggleShowMore}
//                                 >
//                                     See More
//                                 </button>
//                             )}
//                             {showMore && (
//                                 <>
//                                     <button
//                                         className="text-blue-500 mt-2 focus:outline-none"
//                                         onClick={toggleShowLess}
//                                     >
//                                         See Less
//                                     </button>
//                                 </>
//                             )}
//                         </div>
//                     </motion.div>

//                     {/* Card 2 */}
//                     <motion.div
//                         variants={fadeIn("right", "spring", 0.5, 0.75)}
//                         className="xs:w-[320px] w-full bg-tertiary rounded-3xl shadow-card"
//                     >
//                         <img
//                             src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80"
//                             alt="Blog Image"
//                             className="w-full h-[200px] rounded-lg"
//                         />
//                         <div className="p-5">
//                             <h3 className="text-2xl font-bold">Script To Use Chat Gpt At Scale</h3>
//                             <p className={`mt-4 ${showMore ? "" : "line-clamp-3"}`}>
//                             We wanted to get categories for products just by product name. So instead of training our own AI model we tried chat GPT and are very happy with the results.
//                             </p>
//                             {!showMore && (
//                                 <button
//                                     className="text-blue-500 mt-2 focus:outline-none"
//                                     onClick={toggleShowMore}
//                                 >
//                                     See More
//                                 </button>
//                             )}
//                             {showMore && (
//                                 <>
//                                     <button
//                                         className="text-blue-500 mt-2 focus:outline-none"
//                                         onClick={toggleShowLess}
//                                     >
//                                         See Less
//                                     </button>
//                                 </>
//                             )}
//                         </div>
//                     </motion.div>


//                     {/* Card 3 */}
//                     <motion.div
//                         variants={fadeIn("right", "spring", 0.5, 0.75)}
//                         className="xs:w-[320px] w-full bg-tertiary rounded-3xl shadow-card"
//                     >
//                         <img
//                             src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80"
//                             alt="Blog Image"
//                             className="w-full h-[200px] rounded-lg"
//                         />
//                         <div className="p-5">
//                             <h3 className="text-2xl font-bold">Script To Use Chat Gpt At Scale</h3>
//                             <p className={`mt-4 ${showMore ? "" : "line-clamp-3"}`}>
//                             We wanted to get categories for products just by product name. So instead of training our own AI model we tried chat GPT and are very happy with the results.
//                             </p>
//                             {!showMore && (
//                                 <button
//                                     className="text-blue-500 mt-2 focus:outline-none"
//                                     onClick={toggleShowMore}
//                                 >
//                                     See More
//                                 </button>
//                             )}
//                             {showMore && (
//                                 <>
//                                     <button
//                                         className="text-blue-500 mt-2 focus:outline-none"
//                                         onClick={toggleShowLess}
//                                     >
//                                         See Less
//                                     </button>
//                                 </>
//                             )}
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SectionWrapper(Blog);


















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
        <div className="flex flex-wrap gap-10 mt-5">
          {/* Card 1 */}
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="xs:w-[320px] w-full bg-[#090325] rounded-3xl shadow-card"
          >
            {/* Card 1 content */}
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80"
              alt="Blog Image"
              className="w-full h-[200px] rounded-lg"
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold">Script To Use Chat Gpt At Scale</h3>
              <p className={`mt-4 ${showMore[0] ? "" : "line-clamp-3"}`}>
                We wanted to get categories for products just by product name. So instead of training our own AI model we tried chat GPT and are very happy with the results.
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
            className="xs:w-[320px] w-full bg-[#090325] rounded-3xl shadow-card"
          >
            {/* Card 2 content */}
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80"
              alt="Blog Image"
              className="w-full h-[200px] rounded-lg"
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold">Script To Use Chat Gpt At Scale</h3>
              <p className={`mt-4 ${showMore[1] ? "" : "line-clamp-3"}`}>
                We wanted to get categories for products just by product name. So instead of training our own AI model we tried chat GPT and are very happy with the results.
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
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80"
              alt="Blog Image"
              className="w-full h-[200px] rounded-lg"
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold">Script To Use Chat Gpt At Scale</h3>
              <p className={`mt-4 ${showMore[2] ? "" : "line-clamp-3"}`}>
                We wanted to get categories for products just by product name. So instead of training our own AI model we tried chat GPT and are very happy with the results.
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














// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { textVariant, fadeIn } from "../utils/motion";
// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { Link } from "react-router-dom";

// const Blog = () => {
//   const [showMore, setShowMore] = useState(false);

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   const toggleShowLess = () => {
//     setShowMore(false);
//   };

//   return (
//     <>
//       <div className="mt-5">
//         <motion.div variants={textVariant()}>
//           <h2 className={styles.sectionHeadText}>Blogs</h2>
//         </motion.div>
//         <div className="flex flex-wrap gap-10 mt-5">
//           {/* Card 1 */}
//           <motion.div
//             variants={fadeIn("right", "spring", 0.5, 0.75)}
//             className="xs:w-[320px] w-full bg-tertiary rounded-3xl shadow-card"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80"
//               alt="Blog Image"
//               className="w-full h-[200px] rounded-lg"
//             />
//             <div className="p-5">
//               <h3 className="text-2xl font-bold">Script To Use Chat Gpt At Scale</h3>
//               <p className={`mt-4 ${showMore ? "" : "line-clamp-3"}`}>
//                 We wanted to get categories for products just by product name. So instead of training our own AI model we tried chat GPT and are very happy with the results.
//               </p>
//               {!showMore && (
//                 <button
//                   className="text-blue-500 mt-2 focus:outline-none"
//                   onClick={toggleShowMore}
//                 >
//                   See More
//                 </button>
//               )}
//               {showMore && (
//                 <>
//                   <button
//                     className="text-blue-500 mt-2 focus:outline-none"
//                     onClick={toggleShowLess}
//                   >
//                     See Less
//                   </button>
//                 </>
//               )}
//             </div>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div
//             variants={fadeIn("right", "spring", 0.5, 0.75)}
//             className="xs:w-[320px] w-full bg-tertiary rounded-3xl shadow-card"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80"
//               alt="Blog Image"
//               className="w-full h-[200px] rounded-lg"
//             />
//             <div className="p-5">
//               <h3 className="text-2xl font-bold">Script To Use Chat Gpt At Scale</h3>
//               <p className={`mt-4 ${showMore ? "" : "line-clamp-3"}`}>
//                 We wanted to get categories for products just by product name. So instead of training our own AI model we tried chat GPT and are very happy with the results.
//               </p>
//               {!showMore && (
//                 <button
//                   className="text-blue-500 mt-2 focus:outline-none"
//                   onClick={toggleShowMore}
//                 >
//                   See More
//                 </button>
//               )}
//               {showMore && (
//                 <>
//                   <button
//                     className="text-blue-500 mt-2 focus:outline-none"
//                     onClick={toggleShowLess}
//                   >
//                     See Less
//                   </button>
//                 </>
//               )}
//             </div>
//           </motion.div>
//           {/* Card 3 */}
//           <motion.div
//             variants={fadeIn("right", "spring", 0.5, 0.75)}
//             className="xs:w-[320px] w-full bg-tertiary rounded-3xl shadow-card"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1665&q=80"
//               alt="Blog Image"
//               className="w-full h-[200px] rounded-lg"
//             />
//             <div className="p-5">
//               <h3 className="text-2xl font-bold">Script To Use Chat Gpt At Scale</h3>
//               <p className={`mt-4 ${showMore ? "" : "line-clamp-3"}`}>
//                 We wanted to get categories for products just by product name. So instead of training our own AI model we tried chat GPT and are very happy with the results.
//               </p>
//               {!showMore && (
//                 <button
//                   className="text-blue-500 mt-2 focus:outline-none"
//                   onClick={toggleShowMore}
//                 >
//                   See More
//                 </button>
//               )}
//               {showMore && (
//                 <>
//                   <button
//                     className="text-blue-500 mt-2 focus:outline-none"
//                     onClick={toggleShowLess}
//                   >
//                     See Less
//                   </button>
//                 </>
//               )}
//             </div>
//           </motion.div>
//         </div>

//         {/* See More button */}
//         {/* <div className="flex justify-center mt-5">
//           <Link to="/moreblogs" className="text-blue-500 focus:outline-none">
//             See More
//           </Link>
//         </div> */}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Blog);


