import Logo from "../components/Logo";

export default function MovieApp() {
  return (
    <div id="eduquest">
      <main className="flex flex-col w-full min-h-screen h-full pt-10">
        {/* Title */}
        <div className="w-full flex items-center justify-between gap-5 mb-10 max-md:flex-col">
          {/* Title */}
          <h1 className="font-bold text-xl tracking-widest text-white max-sm:mb-4">
            MovieApp - Discover Movies
          </h1>

          {/* Buttons */}
          <div className="flex items-center gap-3 text-sm text-white max-sm:flex-col max-sm:w-full">
            {/* GitHub */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[#A8ADB2]/10 max-sm:w-full max-sm:justify-center rounded-full py-1 px-6 hover:bg-[#A8ADB2]/20 transition-all"
              href="https://github.com/Satyam-1o/movie-app"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
                className="tabler-icon tabler-icon-brand-github-filled"
              >
                <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"></path>
              </svg>
              Github
            </a>

            {/* Live Demo */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-[#A8ADB2]/10 max-sm:w-full max-sm:justify-center rounded-full py-1 px-6 hover:bg-[#A8ADB2]/20 transition-all"
              href="https://movie-app-alpha-bice-90.vercel.app/"
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
          I developed a <span className="text-white">Movie Discovery App</span>{" "}
          using React that allows users to quickly explore and discover movies.
          The app provides a smooth browsing experience with a clean and
          responsive UI styled using Tailwind CSS. It features a search
          functionality for finding movies by title and a dedicated trending
          page to highlight the most popular movies. For the backend, I
          integrated Appwrite as the database and backend service, enabling
          secure storage and efficient management of movie data. Live movie
          information is fetched from an API, and detailed movie cards display
          posters, ratings, and descriptions.
        </p>
        <h2 className="font-bold text-base mt-16 tracking-widest text-white mb-5 uppercase">
          Tech Stack
        </h2>
        <div className="grid grid-cols-4 max-sm:grid-cols-2 items-center gap-3">
          <Logo name="React" source="images/react.svg" />
          <Logo name="Tailwind" source="images/tailwind.svg" />
          <Logo name="Appwrite" source="images/movieapp/Appwrite.svg" />
        </div>
        <h2 className="font-bold text-base mt-16 tracking-widest text-white mb-5 uppercase">
          Key Features
        </h2>
        <ul className="text-[#A8ADB2] w-full space-y-2">
          <li>
            🔍 <span className="text-white font-medium">Search functionality </span>
            — Find movies by title with responsive, real-time results.
          </li>
          <li>
            📈 <span className="text-white font-medium">Trending page </span>
            — Earn points, badges, and rewards as you progress.
          </li>
          <li>
            🎟️ <span className="text-white font-medium">Detailed cards </span>
            — Interactive movie detail cards displaying poster, rating, and description.
          </li>
          <li>
            🧩 <span className="text-white font-medium">Scalable </span>
            — Organized component structure for scalability and maintainability.
          </li>
          <li>
            🌐 <span className="text-white font-medium">API </span>
            — API integration for fetching live movie data.
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
            className="rounded-xl border-1 border-[#A8ADB2]/20"
            src="/images/movieapp/movieapp1.png"
          />
          <img
            alt="project image"
            loading="lazy"
            width={700}
            height={700}
            decoding="async"
            className="rounded-xl border-1 border-[#A8ADB2]/20"
            src="/images/movieapp/movieapp2.png"
          />
          <img
            alt="project image"
            loading="lazy"
            width={700}
            height={700}
            decoding="async"
            className="rounded-xl border-1 border-[#A8ADB2]/20"
            src="/images/movieapp/movieapp3.png"
          />
          
        </div>
      </main>
    </div>
  );
}
