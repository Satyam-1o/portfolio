export default function Navbar() {
  return (
    <header className="w-full pt-5 pb-10">
    <nav className="w-full flex items-center justify-between">
      <a
        className="font-bold hover:text-white uppercase text-[#A8ADB2] text-lg tracking-widest"
        href="/"
      >
        Satyam Kumar
      </a>

      <div className="flex items-center gap-6 text-lg text-[#A8ADB2] max-md:hidden">
        <a className="hover:text-white" href="/#work-experience">
          Work Experience
        </a>
        <a className="hover:text-white" href="projects">
          Projects
        </a>
        <a className="hover:text-white" href="#contact">
          Contact
        </a>
      </div>
    </nav>
    </header>
  );
}
