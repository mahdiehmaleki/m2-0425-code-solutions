export function Dots({
  count,
  activeIndex,
  onDotClick,
}: {
  count: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}) {
  return (
    <div className="dots">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={`dot ${index === activeIndex ? 'active' : ''}`}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
}
