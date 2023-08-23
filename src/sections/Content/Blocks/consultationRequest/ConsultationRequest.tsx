import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button, { ButtonsThemes, ButtonsType } from '../../../../components/Button/Buttons.tsx';

import {
  EntreFormField,
  consultationFormFieldsArr,
  ConsultationFormInputs,
  ConsultationFormFields,
} from './consultationFormFieldsArr';
import { BUTTONS_TITLE, PLACE_HOLDER, VALIDATION_MESSAGES } from '../../../../constants';
import { FormDataEnum } from '../feedBack/FeedBackForm.tsx';

import css from './ConsultationRequest.module.css';

interface ConsultationRequest {
  isCloseModal?: any;
}

const ConsultationRequest: React.FC<ConsultationRequest> = ({ isCloseModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormFields>();
  const onSubmit: SubmitHandler<ConsultationFormInputs> = data => {
    alert(JSON.stringify(data));
    reset();
    isCloseModal();
  };

  return (
    <div id={'consultationId'} className={css.ConsultationFormWrapper}>
      <form className={css.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.FieldsContainer}>
          {consultationFormFieldsArr.map((item: EntreFormField) => (
            <div className={css.InputContainer} key={item.name}>
              <input
                placeholder={item.placeholder}
                className={css.Input}
                {...register(item.name, { required: item.required })}
                pattern={item.pattern}
              />
              {errors[item.name] && <span className={css.ErrorMessage}>{item.errorMessages}</span>}
            </div>
          ))}
          <div className={css.TextareaContainer}>
            <textarea
              className={css.Textarea}
              placeholder={PLACE_HOLDER.ENTER_QUESTION}
              {...register(FormDataEnum.message, { required: true })}
            />
            {errors[FormDataEnum.message] && (
              <span className={css.ErrorMessage}>{VALIDATION_MESSAGES.REQUIRED_FIELD}</span>
            )}
          </div>
          <Button
            children={BUTTONS_TITLE.BOOK_CONSULTATION}
            type={ButtonsType.submit}
            theme={ButtonsThemes.orange}
            className={css.Button}
          />
        </div>
      </form>
    </div>
  );
};

export default ConsultationRequest;
