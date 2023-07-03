// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { experiences } from "../constants";
// import { SectionWrapper } from "../hoc";

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#090325",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full'>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className='w-[60%] h-[60%] object-contain'
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
//         <p
//           className='text-secondary text-[16px] font-semibold'
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className='mt-5 list-disc ml-5 space-y-2'>
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className='text-white-100 text-[14px] pl-1 tracking-wider'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

// const Experience = () => {
//   return (
//     <>
//       <div className=' flex flex-col'>
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Experience, "work");










// import React from "react";
// import { motion } from "framer-motion";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { experiences } from "../constants";
// import { SectionWrapper } from "../hoc";

// const ExperienceCard = ({ experience, index }) => {
//   const isLeftAligned = index % 2 === 0;
//   const lineStyle = {
//     background: "#fff",
//     width: "2px",
//     margin: "0 auto",
//     flex: "1",
//   };

//   return (
//     <motion.div whileHover={{ scale: 1.05 }}>
//       <VerticalTimelineElement
//         className={isLeftAligned ? "left-align" : "right-align"}
//         contentStyle={{
//           background: "#0A2647",
//           color: "#fff",
//         }}
//         contentArrowStyle={{
//           borderRight: isLeftAligned ? "7px solid #232631" : "none",
//           borderLeft: isLeftAligned ? "none" : "7px solid #232631",
//         }}
//         date={experience.date}
//         iconStyle={{ background: experience.iconBg }}
//         icon={
//           <div className="flex justify-center items-center w-full h-full">
//             <img
//               src={experience.icon}
//               alt={experience.company_name}
//               className="w-[60%] h-[60%] object-contain"
//             />
//           </div>
//         }
//       >
//         <div>
//           <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
//           <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
//             {experience.company_name}
//           </p>
//         </div>

//         <ul className="mt-5 list-disc ml-5 space-y-2">
//           {experience.points.map((point, index) => (
//             <li
//               key={`experience-point-${index}`}
//               className="text-white-100 text-[14px] pl-1 tracking-wider"
//             >
//               {point}
//             </li>
//           ))}
//         </ul>
//       </VerticalTimelineElement>

//       {index < experiences.length - 1 && (
//         <div className="vertical-line" style={lineStyle}></div>
//       )}
//     </motion.div>
//   );
// };

// const Experience = () => {
//   return (
//     <>
//       <div className="flex flex-col">
//         <VerticalTimeline layout="1-column">
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//               index={index}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Experience, "work");


















import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#090325",
        color: "#F3F4F6",
        borderRadius: "0.5rem",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1F2937" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-8 h-8 object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-xl font-semibold">{experience.title}</h3>
        <p className="text-gray-400 text-lg font-medium">{experience.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-6 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-300 text-sm"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div className="flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
{/* <hr className="mt-20" />
      <div className="flex justify-start gap-3 mt-5">
        <p>Phone: <a href="tel:+8801855015656">+880 1855015656</a></p>
        <p>Email: <a href="mailto:rahatul99@gmail.com">rahatul99@gmail.com</a></p>
      </div> */}

    </>
  );
};

export default SectionWrapper(Experience, "work");
