import { FC } from 'react';

import css from './NavMenu.module.css';

interface HeaderProps {
  title: string;
}

export const NavMenu: FC = () => {
  const menuItems: HeaderProps[] = [
    { title: 'Appointment' },
    { title: 'Psychologist Info' },
    { title: 'Services' },
    { title: 'Feed Backs' },
    { title: 'Consultation' },
    { title: 'About me' },
  ];

  return (
    <div className={css.NavMenuWrapper}>
      <ul className={css.NavMenuContent}>
        {menuItems.map((item, index) => (
          <li className={css.Link} key={index}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
