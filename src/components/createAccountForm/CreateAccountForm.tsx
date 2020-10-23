import React, { useState, useCallback, FormEvent } from 'react';
import {
    validateNameInput,
    validatePhoneNumberInput,
    validateBirthDateInput,
    validateIfOpionSelected,
} from '../../utils/validation';
import './_createAccountForm.scss';
import DateInput from '../inputs/DateInput';
import PhoneNumberInput from '../inputs/PhoneNumberInput';
import TextInput from '../inputs/TextInput';
import RadioInput, { RadioInputOptions } from '../inputs/RadioInput';

const initialErrors = {
    name: '',
    prefix: '',
    phoneNumber: '',
    playChess: '',
    birthDate: '',
};

const initialValues = {
    name: '',
    prefix: '',
    phoneNumber: '',
    playChess: '',
    birthDateDay: '1',
    birthDateMonth: '1',
    birthDateYear: '1990',
};

const canPlayChessOptions: RadioInputOptions[] = [
    { value: 'Yes', label: 'playChessYes' },
    { value: 'No', label: 'playChessNo' },
];

type CreateAccountFormProps = {
    handleNext(): void;
};

const CreateAccountForm: React.FC<CreateAccountFormProps> = ({ handleNext }) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);

    const onChange = useCallback(
        ({ name, value }) => setValues((values) => ({ ...values, [name]: value })),
        []
    );

    const validate = () => {
        const nameError = validateNameInput(values.name);
        const prefixError = validateIfOpionSelected(values.prefix);
        const phoneNumberError = validatePhoneNumberInput(values.phoneNumber);
        const playChessError = validateIfOpionSelected(values.playChess);
        const birthDateError = validateBirthDateInput(
            values.birthDateDay,
            values.birthDateMonth,
            values.birthDateYear
        );
        const errors = {
            name: nameError,
            prefix: prefixError,
            phoneNumber: phoneNumberError,
            playChess: playChessError,
            birthDate: birthDateError,
        };

        setErrors(errors);
        return errors;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        e.stopPropagation();

        const newErrors = validate();

        const hasErrors = Object.values(newErrors).some((error) => error !== '');
        if (!hasErrors) handleNext();
    };

    return (
        <form
            action=""
            className="create-account-form"
            id="createAccountForm"
            onSubmit={handleSubmit}
        >
            <TextInput
                label="Your name"
                onChange={onChange}
                errorMessage={errors.name}
                additionalClassName="create-account-form__name"
            />
            <PhoneNumberInput
                label="Mobile"
                phoneNumberValue={values.phoneNumber}
                onChange={onChange}
                errorMessagePrefix={errors.prefix}
                errorMessageNumber={errors.phoneNumber}
                additionalClassName="create-account-form__phone-number"
            />
            <RadioInput
                label="Can you play chess?"
                name="playChess"
                options={canPlayChessOptions}
                errorMessage={errors.playChess}
                onChange={onChange}
                additionalClassName="create-account-form__play-chess"
            />
            <DateInput
                label="Date of birth"
                day={values.birthDateDay}
                month={values.birthDateMonth}
                year={values.birthDateYear}
                errorMessage={errors.birthDate}
                onChange={onChange}
                additionalClassName="create-account-form__birth-date"
            />
        </form>
    );
};

export default CreateAccountForm;
