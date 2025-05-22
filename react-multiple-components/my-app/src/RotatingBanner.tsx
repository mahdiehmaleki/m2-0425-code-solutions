import { useState } from 'react';
const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

export default function RotatingBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleNext() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handlePrev() {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  function handleSelect(index: number) {
    setCurrentIndex(index);
  }
  return (
    <>
      <BannerDisplay item={items[currentIndex]} />
      <PrevButton onClick={handlePrev} />
      <Indicators
        count={items.length}
        currentIndex={currentIndex}
        onSelect={handleSelect}
      />
      <NextButton onClick={handleNext} />
    </>
  );
}

type BannerProps = {
  item: string;
};

// Displays the name of the current item
function BannerDisplay({ item }: BannerProps) {
  return <h2>{item}</h2>;
}

// Prev button (no props needed)
function PrevButton({ onClick }: { onClick: () => void }) {
  return <button onClick={onClick}>Prev</button>;
}

// Next button (no props needed)
function NextButton({ onClick }: { onClick: () => void }) {
  return <button onClick={onClick}>Next</button>;
}

// Define prop types
type IndicatorsProps = {
  count: number;
  currentIndex: number;
  onSelect: (index: number) => void;
};

// Indicator buttons
function Indicators({ count, currentIndex, onSelect }: IndicatorsProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        className={i === currentIndex ? 'active' : ''}
        onClick={() => onSelect(i)}>
        {i + 1}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
