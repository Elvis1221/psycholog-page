import { FC } from 'react';
import { useForm } from 'react-hook-form';
import css from './FeedBackForm.module.css';
import { BUTTONS_TITLE, PLACE_HOLDER, VALIDATION_MESSAGES } from '../../../../constants';
import FormTitle from '../../../../components/FormTitle/FormTitle.tsx';
import Button, { ButtonsType } from '../../../../components/Button/Buttons.tsx';
import { InputTypes } from '../consultationRequest/consultationFormFieldsArr.ts';

enum FormDataEnum {
  name = 'name',
  email = 'email',
  message = 'message',
}
type FormData = {
  [FormDataEnum.name]: string;
  [FormDataEnum.email]: string;
  [FormDataEnum.message]: string;
};

const FeedbackForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className={css.FeedbackWrapper}>
      <FormTitle>Please leave feedback</FormTitle>
      <form className={css.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.InputContainer}>
          <input
            placeholder={PLACE_HOLDER.ENTER_NAME}
            type={InputTypes.text}
            className={css.Input}
            {...register(FormDataEnum.name, { required: true })}
          />
          {errors[FormDataEnum.name] && (
            <span className={css.ErrorMessage}>{VALIDATION_MESSAGES.REQUIRED_FIELD}</span>
          )}
          <input
            placeholder={PLACE_HOLDER.ENTER_EMAIL}
            type={InputTypes.email}
            className={css.Input}
            {...register(FormDataEnum.email, { required: true })}
          />
          {errors[FormDataEnum.email] && (
            <span className={css.ErrorMessage}>{VALIDATION_MESSAGES.REQUIRED_FIELD}</span>
          )}
          <textarea
            placeholder={PLACE_HOLDER.ENTER_FEED_BACK}
            {...register(FormDataEnum.message, { required: true })}
          />
          {errors[FormDataEnum.message] && (
            <span className={css.ErrorMessage}>{VALIDATION_MESSAGES.REQUIRED_FIELD}</span>
          )}
        </div>
        <Button
          // disabled={!isValid}
          children={BUTTONS_TITLE.SUBMIT}
          type={ButtonsType.submit}
          // className={css.Button}
        />
      </form>
    </div>
  );
};

export default FeedbackForm;
