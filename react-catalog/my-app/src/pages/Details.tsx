import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { readProduct, toDollars, type Product } from '../lib';

export function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    async function load() {
      const result = await readProduct(Number(id));
      setProduct(result);
    }
    load();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto text-center">
      <img
        src={`/images/${product.imageUrl}`}
        alt={product.name}
        className="w-full h-60 object-cover mb-4"
      />
      <h1 className="text-xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg mb-2">{toDollars(product.price)}</p>
      <p className="mb-4">{product.longDescription}</p>
      <button
        onClick={() => {
          alert('Added to cart!');
          navigate('/');
        }}
        className="bg-blue-600 text-white py-2 px-4 rounded">
        Add to Cart
      </button>
      <div className="mt-4">
        <Link to="/" className="text-blue-500 underline">
          Back to Catalog
        </Link>
      </div>
    </div>
  );
}
