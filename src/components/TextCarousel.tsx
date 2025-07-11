export default function TextCarousel() {
  return (
    <div className="max-w-[1440px] relative w-full bg-black text-white/50 text-sm font-normal font-[Paperlogy] overflow-hidden my-2">
      <div
        className="whitespace-nowrap animate-[scroll-left_20s_linear_infinite] flex items-center h-full"
        style={{ animation: 'scroll-left 25s linear infinite' }}
      >
        {[...Array(2)].map((_, i) => (
          <span key={i} className="mx-2">
            Hello! I'm a passionate front-end developer who loves creating
            smooth, user-friendly experiences. This is my portfolio — a
            collection of projects I'm proud of and challenges I've overcome.
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
}
