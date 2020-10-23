import React, { useState, useCallback } from 'react';
import { validateName, validatePhoneNumber, validateBirthDate } from '../../utils/validation';
import './_createAccountForm.scss';
import DateInput from '../inputs/DateInput';
import PhoneNumberInput from '../inputs/PhoneNumberInput';
import TextInput from '../inputs/TextInput';
import RadioInput, { RadioInputOptions } from '../inputs/RadioInput';

const canPlayChessOptions: RadioInputOptions[] = [
    { value: 'Yes', label: 'playChessYes' },
    { value: 'No', label: 'playChessNo' },
];

const CreateAccountForm: React.FC = () => {
    const [values, setValues] = useState({
        name: '',
        prefix: '',
        phoneNumber: '',
        playChess: '',
        birthDateDay: '1',
        birthDateMonth: '1',
        birthDateYear: '1990',
    });
    const [errors, setErrors] = useState({});

    const onChange = useCallback(
        ({ name, value }) =>
            setValues((values) => {
                const newValues = { ...values, [name]: value };
                // setErrors(validate(newValues));
                return newValues;
            }),
        [values]
    );

    const validate = () => {};

    return (
        <form action="" className="create-account-form">
            <TextInput
                label="Your name"
                onChange={onChange}
                additionalClassName="create-account-form__name"
            />
            <PhoneNumberInput
                label="Mobile"
                phoneNumberValue={values.phoneNumber}
                onChange={onChange}
                additionalClassName="create-account-form__phone-number"
            />
            <RadioInput
                label="Can you play chess?"
                name="playChess"
                options={canPlayChessOptions}
                onChange={onChange}
                additionalClassName="create-account-form__play-chess"
            />
            <DateInput
                label="Date of birth"
                day={values.birthDateDay}
                month={values.birthDateMonth}
                year={values.birthDateYear}
                onChange={onChange}
                additionalClassName="create-account-form__birth-date"
            />
        </form>
    );
};

export default CreateAccountForm;
