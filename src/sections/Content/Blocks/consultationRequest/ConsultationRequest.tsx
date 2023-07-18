import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button, { ButtonsType } from '../../../../components/Button/Buttons.tsx';

import {
  EntreFormField,
  consultationFormFieldsArr,
  ConsultationFormFields,
} from './consultationFormFieldsArr';
import { BUTTONS_TITLE, PLACE_HOLDER, VALIDATION_MESSAGES } from '../../../../constants';

import css from './ConsultationRequest.module.css';
import FormTitle from '../../../../components/FormTitle/FormTitle.tsx';

const ConsultationRequest: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ConsultationFormFields, { comment: string }>();

  const onSubmit: SubmitHandler<ConsultationFormFields> = data => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className={css.ConsultationFormWrapper}>
      <FormTitle>Please leave feedback</FormTitle>
      <form className={css.Form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          {consultationFormFieldsArr.map((item: EntreFormField) => (
            <div className={css.InputWrapper}>
              <label className={css.Label}>{item.label}</label>
              <div className={css.InputContainer}>
                <input
                  placeholder={item.placeholder}
                  className={css.Input}
                  {...register(item.name, { required: item.required })}
                  pattern={item.pattern}
                />
                {errors[item.name] && (
                  <span className={css.ErrorMessage}>{item.errorMessages}</span>
                )}
              </div>
            </div>
          ))}
          <div className={css.InputContainer}>
            <textarea
              className={css.TextArea}
              placeholder={PLACE_HOLDER.ENTER_QUESTION}
              {...register('comment', { required: true })}
            />
            {errors['comment'] && (
              <span className={css.ErrorMessage}>{VALIDATION_MESSAGES.REQUIRED_FIELD}</span>
            )}
          </div>
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

export default ConsultationRequest;
