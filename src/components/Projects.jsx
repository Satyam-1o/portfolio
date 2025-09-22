import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col w-full mt-24 gap-4">
      <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">
        Projects
      </h2>
      <Project3 />
      <Project1 />
      <Project2 />
    </div>
  );
}
