import { useState } from "react";
import { ArrowRigthIcon } from "../../../../../utils/Icons";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="flex flex-row justify-between items-center">
      <div>
        <p className="text-3xl text-white">🥥 Coconut</p>
      </div>
      <div className="hidden md:flex">
        <ul className="flex flex-row justify-between items-center gap-10">
          <li>About us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="md:hidden">
        <button className="text-white" onClick={toggleMobileMenu}>
          Open Menu
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-red-200 absolute w-full">
          <ul className="flex flex-col items-start gap-4">
            <li>About us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
          <button className="flex flex-row justify-center items-center gap-4 rounded-full py-1 pl-4 pr-1 border border-white">
            <p className="text-white">Start a project</p>
            <div className="p-2 rounded-full bg-white">
              <ArrowRigthIcon />
            </div>
          </button>
        </div>
      )}
    </nav>
  );
}
