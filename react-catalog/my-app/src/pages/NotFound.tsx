import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2">
        <Link to="/" className="text-blue-500 underline">
          Return to Catalog
        </Link>
      </p>
    </div>
  );
}
