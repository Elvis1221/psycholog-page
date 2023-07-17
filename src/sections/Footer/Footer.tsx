import { FC } from 'react';

import css from './Footer.module.css';

export const Footer: FC = () => {
  return (
    <footer className={css.FooterWrapper}>
      <div className={css.ContactInfo}>
        <p>123 Main Street, Anytown USA</p>
        <p>Phone: 555-555-5555</p>
        <p>Email: info@psychologist.com</p>
      </div>
      <div className={css.SocialLinks}>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
};
