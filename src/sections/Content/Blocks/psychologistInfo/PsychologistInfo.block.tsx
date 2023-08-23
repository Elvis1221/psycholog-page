import { FC, useState } from 'react';

import BlockTitle from '../../../../components/BlockTitle/BlockTitle.tsx';
import BlockText from '../../../../components/BlockText/BlockText.tsx';

import css from './PsychologistInfo.block.module.css';
import Button, { ButtonsThemes } from '../../../../components/Button/Buttons.tsx';
import Modal from '../../../../components/Modal/Modal.tsx';
import ConsultationRequest from '../consultationRequest/ConsultationRequest.tsx';
import { BLOCK_TITLE, BUTTONS_TITLE } from '../../../../constants';

export const PsychologistInfoBlock: FC = () => {
  const [isDisplayModal, setIsDisplayModal] = useState<boolean>(false);

  const isCloseModal = () => {
    setIsDisplayModal(false);
  };

  const isOpenModal = () => {
    setIsDisplayModal(true);
  };

  return (
    <div id={'psychologistId'} className={css.PsychologistInfoWrapper}>
      <BlockTitle children={BLOCK_TITLE.PSYCHOLOGIST} />
      <div className={css.PsychologistInfoContent}>
        <div className={css.FirstPart}>
          <BlockText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor eos, harum id
            impedit laudantium nesciunt nisi quasi! A adipisci aliquid asperiores at aut beatae
            corporis culpa deserunt dolore dolorem eos error, exercitationem illum impedit itaque e
            laudantium minima necessitatibus odit provident quos ullam veniam. A consectetur dolorem
            earum eos neque ratione rem ut. Amet consequuntur numquam quae. Accusamus consectetur
            hic nesciunt pariatur quas. Accusantium alias aliquid architecto consequatur cumque
            deleniti deserunt dignissimos distinctio eligendi eos eveniet excepturi incidunt,
            laboriosam nobis non optio perferendis porro possimus quaerat quod tenetur voluptas,
            voluptate.
          </BlockText>
          {isDisplayModal && (
            <Modal
              display={isDisplayModal}
              onClose={isCloseModal}
              children={<ConsultationRequest isCloseModal={isCloseModal} />}
            />
          )}
          <Button
            theme={ButtonsThemes.orange}
            children={BUTTONS_TITLE.BOOK_CONSULTATION}
            onClick={isOpenModal}
          />
        </div>
        <div className={css.SecondPart}>
          <BlockText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolor eos, harum id
            impedit laudantium nesciunt nisi quasi! A adipisci aliquid asperiores at aut beatae
            corporis culpa deserunt dolore dolorem eos error, exercitationem illum impedit itaque
            laboriosam minima mollitia nisi officia omnis placeat praesentium quae qui quibusdam
            quidem quos recusandae reprehenderit sint sit soluta sunt voluptatem voluptatibus
            voluptatum! At dicta, dolorem dolores ea exercitationem hic magnam nemo nostrum
            officiis, repellat saepe similique tempore vitae voluptate voluptatibus? A ab aliquam
            cupiditate doloremque eaque est magnam odit omnis quaerat quam quia quo rem repellendus
            repudiandae soluta, voluptas voluptates. A ab alias dolorum ducimus enim harum impedit
            laborum magnam maxime nihil perspiciatis porro quod reiciendis saepe sapiente soluta
            tempora, tenetur totam vel voluptatum. Accusamus aliquam debitis est optio quibusdam
            quod sequi veniam vitae. Adipisci atque corporis dolorem molestiae nemo officiis
            quibusdam recusandae sapiente voluptates voluptatum. Commodi dignissimos incidunt itaque
            laudantium minima necessitatibus odit provident quos ullam veniam. A consectetur dolorem
            earum eos neque ratione rem ut. Amet consequuntur numquam quae. Accusamus consectetur
            hic nesciunt pariatur quas. Accusantium alias aliquid architecto consequatur cumque
            deleniti deserunt dignissimos distinctio eligendi eos eveniet excepturi incidunt,
            laboriosam nobis non optio perferendis porro possimus quaerat quod tenetur voluptas,
            voluptate.
          </BlockText>
        </div>
      </div>
    </div>
  );
};

export default PsychologistInfoBlock;
