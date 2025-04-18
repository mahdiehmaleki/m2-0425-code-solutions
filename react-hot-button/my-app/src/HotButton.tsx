import { useState } from 'react';
import './index.css';

export default function HotButton(): JSX.Element {
  const [clicks, setClicks] = useState<number>(0);

  let className = 'hot-button';

  if (clicks >= 15) {
    className += ' white';
  } else if (clicks >= 12) {
    className += ' yellow';
  } else if (clicks >= 9) {
    className += ' orange';
  } else if (clicks >= 6) {
    className += ' pink';
  } else if (clicks >= 3) {
    className += ' purple';
  } else if (clicks >= 1) {
    className += ' blue';
  }

  return (
    <div className="hot-button-container">
      <button className={className} onClick={() => setClicks(clicks + 1)}>
        Hot Button
      </button>
      <p className="click-count">Clicked {clicks} times</p>
    </div>
  );
}
