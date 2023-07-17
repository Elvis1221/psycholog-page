import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button, { ButtonsType } from '../../../../components/Button/Buttons.tsx';

import {
  EntreFormField,
  registrationFormFieldsArr,
  RegistrationFormValues,
} from './consultationFormFieldsArr';
import { BUTTONS_TITLE } from '../../../../constants';

import css from './ConsultationRequest.module.css';

const ConsultationRequest: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegistrationFormValues>();

  const onSubmit: SubmitHandler<RegistrationFormValues> = data => {
    console.log(data);
  };

  //todo:Fix the form
  return (
    <>
      <form className={css.FormWrapper} onSubmit={handleSubmit(onSubmit)}>
        <div>
          {registrationFormFieldsArr.map((item: EntreFormField) => (
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

          <textarea color="primary" disabled={false} placeholder="Type some question" />
        </div>

        <Button
          disabled={!isValid}
          children={BUTTONS_TITLE.SUBMIT}
          type={ButtonsType.submit}
          className={css.Button}
        />
      </form>
    </>
  );
};

export default ConsultationRequest;
