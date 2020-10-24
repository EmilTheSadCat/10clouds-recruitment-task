import React from 'react';
import InputError from './InputError';
import './_inputs.scss';

type TextInputProps = {
    label: string;
    onChange(onChangeParams: { name: string; value: string }): void;
    additionalClassName?: string;
    errorMessage?: string;
};

const TextInput: React.FC<TextInputProps> = ({
    onChange,
    additionalClassName = '',
    label,
    errorMessage = '',
}) => {
    const errorClassName = errorMessage ? 'error' : '';
    return (
        <div className={`text-input ${additionalClassName} `} data-testid="textInput">
            <label className="label" htmlFor="name" style={{ marginBottom: 0 }}>
                {label}
            </label>
            <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => onChange(e.target)}
                className={`underlined-input ${errorClassName}`}
            />
            <InputError errorMessage={errorMessage} />
        </div>
    );
};

export default TextInput;
