export default function Logo({ name, source }) {
  return (
      <div className="flex justify-center items-center gap-1.5 h-8 px-4 rounded-full bg-blue-600/20 text-blue-300">
        <img
          src={source}
          alt="React logo"
          loading="lazy"
          width="18"
          height="18"
          className="shrink-0"
        />
        <p className="text-xs whitespace-nowrap">{name}</p>
      </div>
  );
}
