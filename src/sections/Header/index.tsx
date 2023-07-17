import { FC } from 'react';

import Logo from './Logo/Logo.tsx';
import Navigation from './NavMenu/NavMenu.tsx';

import css from './index.module.css';
export const Header: FC = () => {
  return (
    <div className={css.HeaderWrapper}>
      <header className={css.Header}>
        <Logo />
        <Navigation />
      </header>
    </div>
  );
};
export default Header;
