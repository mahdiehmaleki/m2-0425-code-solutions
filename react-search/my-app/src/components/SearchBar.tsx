interface SearchBarProps {
  value: string;
  onSearchChange: (newValue: string) => void;
}

export function SearchBar({ value, onSearchChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search quotes..."
      value={value}
      onChange={(e) => onSearchChange(e.target.value)}
      className="search-input"
    />
  );
}
