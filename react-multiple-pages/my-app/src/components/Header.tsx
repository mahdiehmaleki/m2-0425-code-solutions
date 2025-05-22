// src/components/Header.tsx
import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4 flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}
