import Logo from "../components/Logo";

export default function Haikei() {
  return (
    <div id="eduquest">
      <main className="flex flex-col w-full min-h-screen h-full pt-10">
        {/* Title */}
        <div className="w-full flex items-center justify-between gap-5 mb-10 max-md:flex-col">
          {/* Title */}
          <h1 className="font-bold text-xl tracking-widest text-white max-sm:mb-4">
            Haikei - Discover Wallpapers
          </h1>

          {/* Buttons */}
          <div className="flex items-center gap-3 text-sm text-white max-sm:flex-col max-sm:w-full">
            {/* Live Demo */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[#A8ADB2]/10 max-sm:w-full max-sm:justify-center rounded-full py-1 px-6 hover:bg-[#A8ADB2]/20 transition-all"
              href="https://haikei-wallpapers.vercel.app/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
              Live
            </a>

            {/* Video */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[#A8ADB2]/10 max-sm:w-full max-sm:justify-center rounded-full py-1 px-6 hover:bg-[#A8ADB2]/20 transition-all"
              href=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-brand-youtube"
              >
                <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"></path>
                <path d="M10 9l5 3l-5 3z"></path>
              </svg>
              Video
            </a>
          </div>
        </div>
        {/* paragraph */}
        <p className="text-[#A8ADB2]">
          <span className="text-white">Haikei</span> is your go-to destination
          for stunning, high-quality wallpapers tailored for both desktop and
          mobile. From minimal aesthetics to vibrant art, Haikei makes it simple
          to find and personalize your screens with wallpapers that match your
          style. With seamless browsing, quick downloads, and a modern design,
          Haikei helps you transform your background into something inspiring
          every day.
        </p>
        <h2 className="font-bold text-base mt-16 tracking-widest text-white mb-5 uppercase">
          Tech Stack
        </h2>
        <div className="grid grid-cols-4 max-sm:grid-cols-2 items-center gap-3">
          <Logo name="React" source="images/react.svg" />
          <Logo name="Tailwind" source="images/tailwind.svg" />
          <Logo name="Firebase" source="images/Firebase.svg" />
        </div>
        <h2 className="font-bold text-base mt-16 tracking-widest text-white mb-5 uppercase">
          Key Features
        </h2>
        <ul className="text-[#A8ADB2] w-full space-y-2">
          <li>
            🖼️ <span className="text-white font-medium">500+ Wallpapers </span>—
            A growing collection of unique and stunning wallpapers.
          </li>
          <li>
            📱 <span className="text-white font-medium">Fully Responsive </span>
            — Optimized for desktop, tablet, and mobile devices.
          </li>
          <li>
            🎨{" "}
            <span className="text-white font-medium">
              Minimalist Aesthetic{" "}
            </span>
            — Clean design with zero clutter or ads.
          </li>
          <li>
            ⚡ <span className="text-white font-medium">User Friendly </span>—
            Simple navigation and smooth browsing experience.
          </li>
          <li>
            🌟 <span className="text-white font-medium">High Quality </span>—
            All wallpapers available in crisp, full resolution.
          </li>
        </ul>

        <h2 className="font-bold text-base mt-16 tracking-widest text-white mb-5 uppercase">
          Project overview
        </h2>
        <div className="flex flex-col w-full gap-4">
          <img
            alt="project image"
            loading="lazy"
            width={700}
            height={700}
            decoding="async"
            className="rounded-2xl border-1 border-[#A8ADB2]/20"
            src="/images/Haikei/Haikei2.png"
          />
          <img
            alt="project image"
            loading="lazy"
            width={700}
            height={700}
            decoding="async"
            className="rounded-2xl border-1 border-[#A8ADB2]/20"
            src="/images/Haikei/Haikei1.png"
          />
          <img
            alt="project image"
            loading="lazy"
            width={700}
            height={700}
            decoding="async"
            className="rounded-2xl border-1 border-[#A8ADB2]/20"
            src="/images/Haikei/Haikei3.png"
          />
          <img
            alt="project image"
            loading="lazy"
            width={700}
            height={700}
            decoding="async"
            className="rounded-2xl border-1 border-[#A8ADB2]/20"
            src="/images/Haikei/Haikei4.png"
          />
        </div>
      </main>
    </div>
  );
}
