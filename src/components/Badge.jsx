export default function Badge({ source, name }) {
  return (
    <button
      type="button"
      className="border-[#A8ADB2]/50 hover:bg-[#A8ADB2]/10 gap-1.5 h-24 text-[#A8ADB2] border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group"
    >
      <img
        alt="icon-Tailwind"
        loading="lazy"
        width={32}
        height={32}
        decoding="async"
        style={{ color: "transparent" }}
        src={source}
        className="transition-transform duration-300 group-hover:-translate-y-1"
      />
      <p>{name}</p>
    </button>
  );
}
