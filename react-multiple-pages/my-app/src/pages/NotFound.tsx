// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold mb-4 text-red-600">
        404 - Page Not Found
      </h2>
      <p className="mb-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 underline">
        Go back to Dashboard
      </Link>
    </div>
  );
}
