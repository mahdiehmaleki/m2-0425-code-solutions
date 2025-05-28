import { Link } from 'react-router-dom';
import { toDollars, type Product } from '../lib';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 shadow rounded">
      <img
        src={`/images/${product.imageUrl}`}
        alt={product.name}
        className="w-full h-40 object-cover mb-2"
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>{toDollars(product.price)}</p>
      <p>{product.shortDescription}</p>
      <Link
        to={`/details/${product.productId}`}
        className="text-blue-500 underline">
        View Details
      </Link>
    </div>
  );
}
