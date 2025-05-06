export default function RotatingBanner() {
  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];
  const currentIndex = 0;

  return (
    <>
      <BannerDisplay item={items[currentIndex]} />
      <PrevButton />
      <Indicators count={items.length} currentIndex={currentIndex} />
      <NextButton />
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
function PrevButton() {
  return <button>Prev</button>;
}

// Next button (no props needed)
function NextButton() {
  return <button>Next</button>;
}

// Define prop types
type IndicatorsProps = {
  count: number;
  currentIndex: number;
};

// Indicator buttons
function Indicators({ count, currentIndex }: IndicatorsProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button key={i} className={i === currentIndex ? 'active' : ''}>
        {i + 1}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
