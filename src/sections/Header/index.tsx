import { FC, useState, useEffect } from 'react';
import Logo from './Logo/Logo.tsx';
import NavMenu from './NavMenu/NavMenu.tsx';
import css from './index.module.css';
export const Header: FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  //TODO: NEED TO FIX CODE FOR FIX HEADER
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;

      console.log('@@@@@@@', currentScrollPos);
      console.log('@@@@@@@', isVisible);

      setIsHeaderVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  console.log('isHeaderVisible', isHeaderVisible);
  return (
    <header>
      {isHeaderVisible && (
        <div className={css.HeaderWrapper}>
          <Logo />
          <NavMenu />
        </div>
      )}
    </header>
  );
};

export default Header;
