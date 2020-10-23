import React from 'react';
import './_inputs.scss';
import countriesPrefixes from '../../utils/countriesPrefixes/countriesPrefixes';
import { formatMobilePhoneNumber } from '../../utils/format';

type PhoneNumberInputProps = {
    label: string;
    phoneNumberValue: string;
    onChange({}: { name: string; value: string }): void;
    additionalClassName?: string;
};

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
    label,
    phoneNumberValue,
    onChange,
    additionalClassName = '',
}) => {
    return (
        <div className={`phone-number-input ${additionalClassName}`}>
            <label className="label" style={{ marginBottom: 0 }} htmlFor="phoneNumber">
                {label}
            </label>
            <div className="phone-number-input__container">
                <select
                    name="prefix"
                    onChange={(e) => onChange(e.target)}
                    className="phone-number-input__prefix select-input underlined-input"
                >
                    {countriesPrefixes.map((country) => (
                        <option
                            value={country.prefix}
                            key={country.code}
                        >{`${country.prefix} (${country.code})`}</option>
                    ))}
                </select>
                <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="phone-number-input__number underlined-input"
                    value={formatMobilePhoneNumber(phoneNumberValue) || ''}
                    onChange={(e) => onChange(e.target)}
                />
            </div>
        </div>
    );
};

export default PhoneNumberInput;
