import { FC } from 'react';
import { useForm } from 'react-hook-form';
import FormTitle from '../../../../components/FormTitle/FormTitle.tsx';
import Button, { ButtonsThemes, ButtonsType } from '../../../../components/Button/Buttons.tsx';
import FeedbackSlider from './feedbackSlider/FeedbackSlider.tsx';
import BlockTitle from '../../../../components/BlockTitle/BlockTitle.tsx';

import { InputTypes } from '../consultationRequest/consultationFormFieldsArr.ts';
import { BUTTONS_TITLE, PLACE_HOLDER, VALIDATION_MESSAGES } from '../../../../constants';
import { feedbackMock } from './feedbackSlider/feedbackMock.ts';

import css from './FeedBackForm.module.css';

export enum FormDataEnum {
  name = 'name',
  email = 'email',
  message = 'message',
}
export type FormData = {
  [FormDataEnum.name]: string;
  [FormDataEnum.email]: string;
  [FormDataEnum.message]: string;
};

const FeedbackForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);

    if (data) {
      feedbackMock.push(data);
    }
    reset();
  };

  return (
    <div id={'feedBackId'} className={css.FeedbackWrapper}>
      <BlockTitle>{VALIDATION_MESSAGES.LEAVE_FEEDBACK}</BlockTitle>
      <div className={css.FeedbackContent}>
        <form className={css.Form} onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>{VALIDATION_MESSAGES.LEAVE_FEEDBACK}</FormTitle>
          <div className={css.InputContainer}>
            <input
              id={FormDataEnum.name}
              placeholder={PLACE_HOLDER.ENTER_NAME}
              type={InputTypes.text}
              className={css.Input}
              {...register(FormDataEnum.name, { required: true })}
            />
            {errors[FormDataEnum.name] && (
              <span className={css.ErrorMessage}>{VALIDATION_MESSAGES.REQUIRED_FIELD}</span>
            )}
            <input
              id={FormDataEnum.email}
              placeholder={PLACE_HOLDER.ENTER_EMAIL}
              type={InputTypes.email}
              className={css.Input}
              {...register(FormDataEnum.email, { required: true })}
            />
            {errors[FormDataEnum.email] && (
              <span className={css.ErrorMessage}>{VALIDATION_MESSAGES.REQUIRED_FIELD}</span>
            )}
          </div>
          <div className={css.TextareaContainer}>
            <textarea
              className={css.Textarea}
              id={FormDataEnum.message}
              placeholder={PLACE_HOLDER.ENTER_FEED_BACK}
              {...register(FormDataEnum.message, { required: true })}
            />
            {errors[FormDataEnum.message] && (
              <span className={css.ErrorMessage}>{VALIDATION_MESSAGES.REQUIRED_FIELD}</span>
            )}
          </div>

          <Button
            children={BUTTONS_TITLE.SUBMIT}
            type={ButtonsType.submit}
            theme={ButtonsThemes.blue}
          />
        </form>
        <div className={css.Slider}>
          <FeedbackSlider feedbacks={feedbackMock} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
