import { useEffect, useState } from 'react';
import { readCatalog, type Product } from '../lib';
import { ProductCard } from '../components/ProductCard';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function load() {
      const result = await readCatalog();
      setProducts(result);
    }
    load();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  );
}
