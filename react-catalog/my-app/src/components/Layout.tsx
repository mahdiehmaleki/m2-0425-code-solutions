import { Outlet, Link } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <header className="bg-gray-800 p-4 text-white flex justify-between">
        <Link to="/">Catalog</Link>
        <Link to="/about">About</Link>
      </header>
      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
}
