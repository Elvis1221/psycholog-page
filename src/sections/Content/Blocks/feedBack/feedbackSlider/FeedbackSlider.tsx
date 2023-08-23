import { FC, useState, useEffect } from 'react';

import { FormData } from '../FeedBackForm.tsx';

import css from './FeedbackSlider.module.css';

interface FeedbackSliderProps {
  feedbacks: FormData[];
}

export const FeedbackSlider: FC<FeedbackSliderProps> = ({ feedbacks }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [feedbacks]);

  return (
    <div className={css.FeedbackSliderContent}>
      {feedbacks.map((feedback, index) => (
        <div key={index} className={`${css.Feedback} ${index === activeIndex ? css.Active : ''}`}>
          <p className={css.FeedbackName}>{feedback.name}</p>
          <p className={css.FeedbackEmail}>{feedback.email}</p>
          <p className={css.FeedbackText}>{feedback.message}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackSlider;
