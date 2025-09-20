import Logo from "./Logo";

export default function Project3() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-start gap-8">
        <div className="rounded-lg w-[640px] border border-[#A8ADB2]/50 p-5 flex flex-col gap-5">
          <a aria-label="See more about the EduQuest App" href="/haikei">
            <img
              alt="project-screenshot"
              loading="lazy"
              width="600"
              class="rounded-md object-cover"
              src="/images/Haikei/HaikeiCover.png"
            />
          </a>
          <div className="flex flex-col">
            <p className="font-bold text-white text-xl tracking-widest">
              Haikei
            </p>
            <p className="text-[#A8ADB2] mt-3">
              <span className="text-white">Haikei</span> is your go-to destination for stunning, high-quality wallpapers tailored for both desktop and mobile. From minimal aesthetics to vibrant art, Haikei makes it simple to find and personalize your screens with wallpapers that match your style. With seamless browsing, quick downloads, and a modern design, Haikei helps you transform your background into something inspiring every day.
            </p>
          </div>
          <div className="grid grid-cols-4 max-sm:grid-cols-2 items-center gap-2 mt-5">
            <Logo name="React" source="images/react.svg" />
            <Logo name="Tailwind" source="images/tailwind.svg" />
            <Logo name="Firebase" source="images/Firebase.svg" />
          </div>
          <div className="flex items-center gap-2 w-full mt-8 max-md:flex-col">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://haikei-wallpapers.vercel.app/"
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
          aria-label="See more about the haikei app"
          href="/haikeic:\Users\user\Downloads\Haikei4.png"
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
