import { FC } from 'react';
import Logo from './Logo/Logo.tsx';
import NavMenu from './NavMenu/NavMenu.tsx';
import css from './index.module.css';

export const Header: FC = () => {
  return (
    <header>
      <div className={css.HeaderWrapper}>
        <Logo />
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
