import { FC } from 'react';

import Logo from './Logo/Logo.tsx';
import Navigation from './NavMenu/NavMenu.tsx';

import css from './index.module.css';
export const Header: FC = () => {
  return (
    <header className={css.Header}>
      <Logo />
      <Navigation />
    </header>
  );
};
export default Header;
