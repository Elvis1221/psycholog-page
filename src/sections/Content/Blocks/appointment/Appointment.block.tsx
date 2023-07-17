import { FC } from 'react';

import css from './Appointment.block.module.css';
import BlockTitle from '../../../../components/BlockTitle/BlockTitle.tsx';
import BlockText from '../../../../components/BlockText/BlockText.tsx';

export const AppointmentBlock: FC = () => {
  return (
    <div className={css.AppointmentWrapper}>
      <BlockTitle children={'Appointment Block'} />
      <div className={css.AppointmentContent}>
        <div className={css.FirstPart}>
          <BlockText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate dicta
            distinctio dolorum ea eum eveniet facere ipsum nihil nulla odio possimus quidem quo quod
            repellendus sequi similique, tempore vitae voluptate voluptates. Accusantium alias
            dolores impedit iusto nihil pariatur quam voluptates. Dolor et hic magnam maxime placeat
            porro quaerat, quidem tempore voluptatum? Aut dolorem officiis sequi. Aperiam delectus
            dolore, error et exercitationem labore laboriosam nemo tenetur vitae. Accusamus adipisci
            atque autem blanditiis culpa debitis deleniti dignissimos distinctio dolore doloribus
            eius, excepturi itaque iusto labore molestiae, neque nobis nostrum nulla odio officiis
            optio perspiciatis quaerat quibusdam quidem quo quod reiciendis repellat saepe sapiente
            sint sit sunt temporibus tenetur ullam veniam, veritatis voluptatibus! At fuga inventore
            possimus reiciendis? Accusantium amet architecto atque blanditiis commodi, cumque
            debitis delectus dicta dignissimos distinctio ducimus earum est eveniet exercitationem
            explicabo fugit harum illo inventore iste, itaque modi nam necessitatibus nemo nostrum
            nulla quaerat quam, quia repudiandae sunt tempora tempore ut veniam veritatis. Atque
            deleniti explicabo libero! Delectus doloribus enim libero magni maiores molestias
            ratione unde, ut voluptas voluptates. At commodi consectetur est illum in ipsa, ipsam
            minus molestiae molestias necessitatibus neque quaerat quas quidem. In omnis quisquam
            sint soluta temporibus? Aliquid assumenda consectetur impedit neque voluptates.
          </BlockText>
        </div>
        <div className={css.SecondPart}>
          <BlockText>some text</BlockText>
        </div>
        <div className={css.ThirdPart}>
          <BlockText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio doloremque eum
            mollitia placeat quia recusandae sequi! Ab adipisci at beatae dolore, explicabo labore
            magni maiores maxime natus nihil officiis optio quae quis quod quos sequi unde
            voluptates voluptatum! Amet ducimus eligendi ipsam modi neque officia quo quod ratione
            tempora vel!
          </BlockText>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBlock;
