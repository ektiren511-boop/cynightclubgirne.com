// Slow editorial marquee.
export const Marquee = ({
  items = [],
  speed = "slow",
  className = "",
  separator = "◆",
  testId = "marquee",
}) => {
  const list = [...items, ...items, ...items, ...items];
  return (
    <div
      className={`overflow-hidden whitespace-nowrap select-none ${className}`}
      data-testid={testId}
    >
      <div className={`marquee-track inline-flex ${speed === "fast" ? "fast" : ""}`}>
        {list.map((txt, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 md:gap-10 pr-6 md:pr-10 shrink-0"
          >
            {txt}
            <span className="text-[#D4AF37]/70 text-xs md:text-sm">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
