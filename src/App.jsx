// import { BrowserRouter } from "react-router-dom";
// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Blog } from "./components";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className='relative z-0 bg-[#03001C]'>
//         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Experience />
//         <Tech />
//         <Blog />
//         <Works />
//         <Feedbacks />
//         <div className='relative z-0'>
//           <Contact />
//           <StarsCanvas />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;







import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Blog } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#03001C]'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Works />
        <Tech />
        <Blog />
        <About />
        <Experience />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
