// import { useState } from "react";
// import { ArrowRigthIcon } from "../../../../../utils/Icons";

// export default function NavBar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };
//   return (
//     <nav className="flex flex-row justify-between items-center">
//       <div>
//         <p className="text-3xl text-white">🥥 Coconut</p>
//       </div>
//       <div className="hidden md:flex">
//         <ul className="flex flex-row justify-between items-center gap-10">
//           <li>About us</li>
//           <li>Services</li>
//           <li>Projects</li>
//           <li>Contacts</li>
//         </ul>
//       </div>
//       <div className="md:hidden">
//         <button className="text-white" onClick={toggleMobileMenu}>
//           Open Menu
//         </button>
//       </div>
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-red-200 absolute w-full">
//           <ul className="flex flex-col items-start gap-4">
//             <li>About us</li>
//             <li>Services</li>
//             <li>Projects</li>
//             <li>Contacts</li>
//           </ul>
//           <button className="flex flex-row justify-center items-center gap-4 rounded-full py-1 pl-4 pr-1 border border-white">
//             <p className="text-white">Start a project</p>
//             <div className="p-2 rounded-full bg-white">
//               <ArrowRigthIcon />
//             </div>
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRigthIcon } from "../../../../../utils/Icons";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="w-full z-10 h-16 flex justify-between items-center px-6 backdrop-blur-lg">
      <div>
        <span className="text-white text-xl  tablet:text-2xl laptop:text-3xl desktop:text-3xl">
          🥥 Coconut
        </span>
      </div>
      <div className="hidden tablet:flex">
        <ul className="flex flex-row justify-between items-center gap-10">
          <li>About us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="hidden tablet:flex">
        <button className="flex flex-row justify-center items-center gap-4 rounded-full py-1 pl-4 pr-1 border border-white">
          <p className="text-white">Start a project</p>
          <div className="p-2 rounded-full bg-white">
            <ArrowRigthIcon />
          </div>
        </button>
      </div>
      <div className="tablet:hidden">
        <button
          className="text-white text-lg p-2 rounded-lg bg-transparent outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      {showMenu && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="laptop:hidden absolute top-24 left-0 w-[100%] h-[100vh] bg-black flex items-center justify-center"
        >
          <ul className="flex flex-col justify-center items-center gap-5">
            <li>About us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contacts</li>
            <button className="flex flex-row justify-center items-center gap-4 rounded-full py-1 pl-4 pr-1 border border-white">
              <p className="text-white">Start a project</p>
              <div className="p-2 rounded-full bg-white">
                <ArrowRigthIcon />
              </div>
            </button>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
