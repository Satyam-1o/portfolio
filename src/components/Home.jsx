import TechStack from "./TechStack";
import Projects from "./Projects";

export default function Home() {
  return (
    <div>
      <main className="w-full min-h-screen h-full flex justify-center pb-10">
        <div className="h-full w-full mx-auto">
          <div className="pb-20 pt-16 flex items-center gap-10 max-md:flex-col max-md:text-center">
            {/* Avatar */}
            <div className="relative w-44 h-44 min-w-44 min-h-44 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full p-1">
                <div className="w-full h-full bg-dark-bg rounded-full">
                  <img
                    src="/images/gojo.jpg"
                    width={170}
                    height={170}
                    alt="Avatar"
                    className="w-full h-full object-cover rounded-full border-white border-4"
                  />
                </div>
              </div>
            </div>

            {/* Intro + Info */}
            <div className="flex flex-col items-start gap-6">
              <h1 className="text-[#A8ADB2] font-bold text-[28px] tracking-[0.03em] relative">
                <span className="text-white">Hey, I'm Satyam.</span> I'm a
                Full-Stack <br />
                Software Developer.
                {/* Open to work badge */}
                <div className="bg-green-640/20 absolute max-md:relative right-0 bottom-1.5 whitespace-nowrap text-green-600 hover:bg-green-500/20 text-sm px-3 py-1 rounded-full inline-block hover:text-green-500">
                  <span className="p-1 mb-px mr-1.5 inline-block bg-green-600 rounded-full"></span>
                  Open to work
                </div>
              </h1>

              {/* Location + Socials */}
              <div className="w-full flex items-center justify-between max-md:flex-col max-md:gap-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A8ADB2] whitespace-nowrap hover:text-white"
                  href=""
                >
                  🏠 New Delhi, India.
                </a>

                <div className="w-full flex items-center justify-end max-md:justify-center gap-5 text-base text-[#A8ADB2]">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-1 items-center hover:text-white"
                    href="https://www.linkedin.com/in/satyam-kumar-aba131343/"
                  >
                    <img
                      alt="icon"
                      loading="lazy"
                      width={24}
                      height={24}
                      decoding="async"
                      src="https://www.stefantopalovic.com/linkedin-icon.svg"
                    />
                    LinkedIn
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-1 items-center hover:text-white"
                    href="https://github.com/Satyam-1o"
                  >
                    <img
                      alt="icon"
                      loading="lazy"
                      width={20}
                      height={20}
                      decoding="async"
                      src="https://www.stefantopalovic.com/github-icon.svg"
                    />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <TechStack />
          <Projects />
        </div>
      </main>
    </div>
  );
}
