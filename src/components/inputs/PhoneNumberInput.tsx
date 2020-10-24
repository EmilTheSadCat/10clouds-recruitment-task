import React from 'react';
import './_inputs.scss';
import InputError from './InputError';
import countriesPrefixes from '../../utils/countriesPrefixes/countriesPrefixes';
import { formatMobilePhoneNumber } from '../../utils/format';

type PhoneNumberInputProps = {
    label: string;
    phoneNumberValue: string;
    errorMessagePrefix?: string;
    errorMessageNumber?: string;
    onChange(onChangeParams: { name: string; value: string }): void;
    additionalClassName?: string;
};

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
    label,
    phoneNumberValue,
    onChange,
    errorMessagePrefix = '',
    errorMessageNumber = '',
    additionalClassName = '',
}) => {
    const errorClassName = errorMessagePrefix || errorMessageNumber ? 'error' : '';
    return (
        <fieldset className={`phone-number-input ${additionalClassName}`} data-testid="phoneNumberInput">
            <label className="label" style={{ marginBottom: 0 }} htmlFor="phoneNumber">
                {label}
            </label>
            <div className="phone-number-input__container">
                <div className="phone-number-input__prefix">
                    <select
                        name="prefix"
                        onChange={(e) => onChange(e.target)}
                        className={`select-input underlined-input ${
                            errorMessagePrefix ? errorClassName : ''
                        }`}
                        placeholder="Prefix"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Prefix
                        </option>
                        {countriesPrefixes.map((country) => (
                            <option
                                value={country.prefix}
                                key={country.code}
                            >{`${country.prefix} (${country.code})`}</option>
                        ))}
                    </select>
                    <InputError errorMessage={errorMessagePrefix} />
                </div>
                <div className="phone-number-input__number">
                    <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        className={`underlined-input ${errorMessageNumber ? errorClassName : ''}`}
                        value={formatMobilePhoneNumber(phoneNumberValue) || ''}
                        onChange={(e) => onChange(e.target)}
                    />
                    <InputError errorMessage={errorMessageNumber} />
                </div>
            </div>
        </fieldset>
    );
};

export default PhoneNumberInput;
