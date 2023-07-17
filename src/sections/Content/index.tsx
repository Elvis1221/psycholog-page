import { FC } from 'react';
import PsychologistInfoBlock from './Blocks/psychologistInfo/PsychologistInfo.block.tsx';
import AppointmentBlock from './Blocks/appointment/Appointment.block.tsx';
import ServicesBlock from './Blocks/services/Services.block.tsx';

import css from './index.module.css';

export const Content: FC = () => {
  return (
    <main>
      <div className={css.ContentWrapper}>
        <PsychologistInfoBlock />
        <AppointmentBlock />
        <ServicesBlock />
      </div>
    </main>
  );
};

export default Content;
