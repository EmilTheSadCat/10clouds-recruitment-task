import React from 'react';
import InputError from './InputError';
import './_inputs.scss';

export type RadioInputOptions = {
    value: string;
    label: string;
};

type RadioInputProps = {
    label: string;
    name: string;
    onChange(onChangeParams: { name: string; value: string }): void;
    errorMessage?: string;
    options: RadioInputOptions[];
    additionalClassName?: string;
};

const RadioInput: React.FC<RadioInputProps> = ({
    label,
    name,
    onChange,
    errorMessage = '',
    options = [],
    additionalClassName = '',
}) => {
    return (
        <div className={`radio-input ${additionalClassName}`}>
            <span className="label">{label}</span>
            <div className="radio-input__container">
                {options.map(({ label, value }) => (
                    <React.Fragment key={label}>
                        <input
                            type="radio"
                            name={name}
                            id={label}
                            value={value}
                            onChange={(e) => onChange(e.target)}
                        />
                        <label htmlFor={label}>
                            <span>{value}</span>
                        </label>
                    </React.Fragment>
                ))}
            </div>
            <InputError errorMessage={errorMessage} />
        </div>
    );
};

export default RadioInput;
