import { FC } from 'react';

import css from './NavMenu.module.css';

interface HeaderProps {
  title: string;
  href: string;
}

export const NavMenu: FC = () => {
  const menuItems: HeaderProps[] = [
    { title: 'Appointment', href: '#appointmentId' },
    { title: 'About me', href: '#psychologistId' },
    { title: 'Feed Back', href: '#feedBackId' },
    { title: 'Consultation', href: '#consultationId' },
    { title: 'Services', href: '#servicesId' },
  ];

  // const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //
  //   const href = e.currentTarget.getAttribute('href').substring(1);
  //
  //   const scrollTarget = document.getElementById(href);
  //
  //   if (!scrollTarget) {
  //     return;
  //   }
  //
  //   const topOffset = 80;
  //   const elementPosition = scrollTarget.getBoundingClientRect().top;
  //   const offsetPosition = Math.round(elementPosition) - Math.round(topOffset);
  //
  //   window.scrollBy({
  //     top: offsetPosition,
  //     behavior: 'smooth',
  //   });
  // };
  //
  // console.log('handleClick', handleClick);

  return (
    <>
      <div className={css.NavMenuContent}>
        {menuItems.map((item, index) => (
          <a className={css.NavElement} key={index} href={item.href}>
            {item.title}
          </a>
        ))}
      </div>
    </>
  );
};

export default NavMenu;
