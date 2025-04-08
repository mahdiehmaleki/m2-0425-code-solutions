import { useState } from 'react';

type Props = {
  text: string[];
};
export function Description({ text }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= text.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return <p onClick={handleClick}>{text[index]}</p>;
}
