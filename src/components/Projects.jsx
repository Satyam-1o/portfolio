import ProjectEdu from "./ProjectEdu";

export default function Projects() {
  return (
    <div className="flex flex-col w-full mt-24">
      <h2
        id="projects"
        className="font-bold text-lg tracking-widest text-white uppercase mb-10"
      >
        Projects
      </h2>
      <ProjectEdu />
    </div>
  );
}
