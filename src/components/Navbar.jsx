import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <header className="w-full pt-5 pb-10">
      <nav className="w-full flex items-center justify-between">
        <HashLink
          smooth
          className="font-bold hover:text-white uppercase text-[#A8ADB2] text-lg tracking-widest"
          to="/#"
        >
          Satyam Kumar
        </HashLink>

        <div className="flex items-center gap-6 text-lg text-[#A8ADB2] max-md:hidden">
          <HashLink smooth className="hover:text-white" to="/#work-experience">
            Work Experience
          </HashLink>
          <HashLink smooth className="hover:text-white" to="/#projects">
            Projects
          </HashLink>
          <HashLink smooth className="hover:text-white" to="#contact">
            Contact
          </HashLink>
        </div>
      </nav>
    </header>
  );
}
