import { FC } from 'react';
import PsychologistInfoBlock from './Blocks/psychologistInfo/PsychologistInfo.block.tsx';
import AppointmentBlock from './Blocks/appointment/Appointment.block.tsx';
import ServicesBlock from './Blocks/services/Services.block.tsx';

import css from './index.module.css';
import FeedbackForm from './Blocks/feedBack/FeedBackForm.tsx';
// import FeedbackSlider from './Blocks/feedBack/feedbackSlider/FeedbackSlider.tsx';
// import { feedbackMock } from './Blocks/feedBack/feedbackSlider/feedbackMock.ts';

export const Content: FC = () => {
  return (
    <main>
      <div className={css.ContentWrapper}>
        <PsychologistInfoBlock />
        <AppointmentBlock />
        <ServicesBlock />
        <FeedbackForm />
      </div>
    </main>
  );
};

export default Content;
