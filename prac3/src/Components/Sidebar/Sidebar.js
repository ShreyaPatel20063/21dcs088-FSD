
import { useState } from 'react';

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    {
      name: 'Dashboard',
      link: '/dashboard'
    },
    {
      name: 'Messages',
      link: '/messages'
    },
    {
      name: 'Analytics',
      link: '/analytics'
    }
  ];

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map(item => (
          <li 
            key={item.name}
            className={item.name === activeMenu ? 'active' : ''}
            onClick={() => setActiveMenu(item.name)}
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

