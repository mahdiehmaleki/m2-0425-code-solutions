interface ItemListProps {
  items: string[];
}

export function ItemList({ items }: ItemListProps) {
  if (items.length === 0) {
    return <p>No matching quotes found.</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
