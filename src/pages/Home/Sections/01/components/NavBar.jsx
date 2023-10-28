import { ArrowRigthIcon } from "../../../../../utils/Icons";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center">
      <div>
        <p className="text-3xl text-white">🥥 Coconut</p>
      </div>
      <div>
        <ul className="flex flex-row justify-between items-center gap-10">
          <li>About us</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div>
        <button className="flex flex-row justify-center items-center gap-4 rounded-full py-1 pl-4 pr-1 border border-white">
          <p className="text-white">Start a project</p>
          <div className="p-2 rounded-full bg-white">
            <ArrowRigthIcon />
          </div>
        </button>
      </div>
    </nav>
  );
}
