import { PATTERNS, PLACE_HOLDER, VALIDATION_MESSAGES } from '../../../../constants';

export enum ConsultationFormNameEnum {
    email = 'email',
    firstName = 'firstName',
    lastName = 'lastName',
    phoneNumber = 'phoneNumber',
    message = 'message',
}

export enum InputTypes {
    text = 'text',
    tel = 'tel',
    email = 'email',
}

export type ConsultationFormInputs = {
    [ConsultationFormNameEnum.email]: string;
    [ConsultationFormNameEnum.firstName]: string;
    [ConsultationFormNameEnum.lastName]: string;
    [ConsultationFormNameEnum.phoneNumber]: string;
};

export type ConsultationFormFields = ConsultationFormInputs & {
    [ConsultationFormNameEnum.message]: string;
};

export type EntreFormField = {
    label?: string;
    name: ConsultationFormNameEnum;
    type: string;
    errorMessages: string;
    required?: boolean;
    placeholder?: string;
    pattern?: any;
};

export const consultationFormFieldsArr: EntreFormField[] = [
    {
        // label: FORM_LABELS.FIRST_NAME,
        type: InputTypes.text,
        name: ConsultationFormNameEnum.firstName,
        placeholder: PLACE_HOLDER.ENTER_NAME,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        required: true,
    },
    // {
    //     // label: FORM_LABELS.LAST_NAME,
    //     type: InputTypes.text,
    //     name: ConsultationFormNameEnum.lastName,
    //     placeholder: PLACE_HOLDER.ENTER_LAST_NAME,
    //     errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
    //     required: true,
    // },
    {
        // label: FORM_LABELS.EMAIL,
        type: InputTypes.email,
        name: ConsultationFormNameEnum.email,
        placeholder: PLACE_HOLDER.ENTER_EMAIL,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        pattern: PATTERNS.EMAIL,
        required: true,
    },
    {
        // label: FORM_LABELS.PHONE_NUMBER,
        type: InputTypes.tel,
        name: ConsultationFormNameEnum.phoneNumber,
        placeholder: PLACE_HOLDER.ENTER_PHONE_NUMBER,
        errorMessages: VALIDATION_MESSAGES.REQUIRED_FIELD,
        // pattern: PATTERNS.PHONE_NUMBER,
        required: true,
    },
];
