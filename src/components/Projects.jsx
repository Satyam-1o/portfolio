import Project1 from "./Project1";
import Project2 from "./Project2";

export default function Projects() {
  return (
    <div className="flex flex-col w-full mt-24 gap-4">
      <h2
        id="projects"
        className="font-bold text-lg tracking-widest text-white uppercase mb-10"
      >
        Projects
      </h2>
      <Project1 />
      <Project2 />
    </div>
  );
}
