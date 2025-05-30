import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MenuItem } from './MenuItem';

type MenuItemType = {
  name: string;
  path: string;
  icon: string;
};

export function AppDrawer({
  heading,
  items,
}: {
  heading: string;
  items: MenuItemType[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="flex w-full">
      <div className={`menu-drawer ${isOpen ? 'is-open' : ''}`}>
        <FaBars className="menu-icon" onClick={() => setIsOpen(!isOpen)} />
        {isOpen && <h3 className="menu-heading">{heading}</h3>}
        <ul className="menu-items">
          {items.map((item) => (
            <MenuItem
              key={item.name}
              item={item}
              isOpen={isOpen}
              activePath={pathname}
            />
          ))}
        </ul>
      </div>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
