import { FC, useState } from 'react';

import Modal from '../../components/Modal/Modal.tsx';
import ConsultationRequest from '../Content/Blocks/consultationRequest/ConsultationRequest.tsx';
import Button, { ButtonsThemes } from '../../components/Button/Buttons.tsx';

import { BUTTONS_TITLE } from '../../constants';

import css from './Footer.module.css';

export const Footer: FC = () => {
  const [isDisplayModal, setIsDisplayModal] = useState<boolean>(false);

  const isCloseModal = () => {
    setIsDisplayModal(false);
  };

  const isOpenModal = () => {
    setIsDisplayModal(true);
  };

  return (
    <footer className={css.FooterWrapper}>
      <div className={css.ContactInfo}>
        <p>Full name: Ivan Ivanov</p>
        <p>Phone: 555-555-5555</p>
        <p>Email: info@psychologist.com</p>
      </div>
      <div>
        {isDisplayModal && (
          <Modal
            display={isDisplayModal}
            onClose={isCloseModal}
            children={<ConsultationRequest />}
          />
        )}
        <Button
          theme={ButtonsThemes.orange}
          children={BUTTONS_TITLE.BOOK_CONSULTATION}
          onClick={isOpenModal}
          className={css.Button}
        />
      </div>
      <div className={css.SocialLinks}>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
};
