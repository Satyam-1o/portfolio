import Logo from "./Logo";

export default function Project2() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-start gap-8">
        <div className="rounded-lg w-[640px] border border-[#A8ADB2]/50 p-5 flex flex-col gap-5">
          <a aria-label="See more about the EduQuest App" href="/movieapp">
            <img
              alt="project-screenshot"
              loading="lazy"
              width="600"
              class="rounded-md object-cover"
              src="/images/movieapp/movieapp-cover.png"
            />
          </a>
          <div className="flex flex-col">
            <p className="font-bold text-white text-xl tracking-widest">
              MOVIE APP
            </p>
            <p className="text-[#A8ADB2] mt-3">
              <span className="text-white">Movie App</span> is a Movie Discovery App made using React that allows users to quickly explore and discover movies. The app provides a smooth browsing experience with a clean and responsive UI styled using Tailwind CSS.
            </p>
          </div>
          <div className="grid grid-cols-4 max-sm:grid-cols-2 items-center gap-2 mt-5">
            <Logo name="React" source="images/react.svg" />
            <Logo name="Tailwind" source="images/tailwind.svg" />
            <Logo name="Appwrite" source="images/movieapp/Appwrite.svg" />
          </div>
          <div className="flex items-center gap-2 w-full mt-8 max-md:flex-col">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://movie-app-alpha-bice-90.vercel.app/"
              className="w-1/3 bg-[#A8ADB2]/10 uppercase text-xs transition-all hover:bg-[#A8ADB2]/20 
             rounded-full font-bold text-white flex items-center justify-center 
             px-4 py-2 gap-2 max-md:w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-world"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M3.6 9h16.8"></path>
                <path d="M3.6 15h16.8"></path>
                <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                <path d="M12.5 3a17 17 0 0 1 0 18"></path>
              </svg>
              Live demo
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Satyam-1o/movie-app"
              className="w-1/3 bg-[#A8ADB2]/10 uppercase text-xs transition-all hover:bg-[#A8ADB2]/20 
             rounded-full font-bold text-white flex items-center justify-center 
             px-4 py-2 gap-2 max-md:w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-brand-github"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
              Source code
            </a>
            <a
              target="_blank"
              href=""
              class="w-1/3 bg-[#A8ADB2]/10  uppercase text-xs transition-all hover:bg-[#A8ADB2]/20  rounded-full font-bold text-white flex items-center justify-center px-4 py-2 gap-2 max-md:w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-brand-youtube"
              >
                <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
                <path d="M10 9l5 3l-5 3z"></path>
              </svg>
              Watch video
            </a>
          </div>
        </div>
        <a
          aria-label="See more about the Tribe app"
          href="/eduquest"
          class="flex flex-col p-2 max-sm:hidden rounded-full bg-[#A8ADB2]/20 text-white font-medium text-sm transition-all hover:bg-light-gray/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="tabler-icon tabler-icon-external-link"
          >
            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
            <path d="M11 13l9 -9"></path>
            <path d="M15 4h5v5"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
