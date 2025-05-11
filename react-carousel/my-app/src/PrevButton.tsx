import { FaChevronLeft } from 'react-icons/fa';

export function PrevButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="nav-button">
      <FaChevronLeft />
    </button>
  );
}
