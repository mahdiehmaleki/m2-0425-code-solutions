import './Image.css';
import { useState } from 'react';

type Props = {
  src: string[];
};
export function Image({ src }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= src.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={src[index]}
          onClick={handleClick}
          alt="space-image"
        />
      </div>
    </div>
  );
}
