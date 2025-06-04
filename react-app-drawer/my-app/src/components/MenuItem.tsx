import { Link } from 'react-router-dom';

type MenuItemType = {
  item: {
    name: string;
    path: string;
    icon: string;
  };
  isOpen: boolean;
  activePath: string;
};

export function MenuItem({ item, isOpen, activePath }: MenuItemType) {
  const isActive = item.path === activePath;

  return (
    <li className="menu-item">
      <Link to={item.path} className={`menu-link ${isActive ? 'active' : ''}`}>
        <img src={item.icon} className="item-icon" alt={item.name} />
        {isOpen && item.name}
      </Link>
    </li>
  );
}
