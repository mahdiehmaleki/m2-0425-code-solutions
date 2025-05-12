import { FaChevronRight } from 'react-icons/fa';

export function NextButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="nav-button">
      <FaChevronRight />
    </button>
  );
}
