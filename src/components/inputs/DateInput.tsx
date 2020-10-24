import React, { useEffect } from 'react';
import { useWindowWidth } from '../../utils/customHooks';
import { prefixNumberWith0 } from '../../utils/format';
import InputError from './InputError';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import './_inputs.scss';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

type DateInputProps = {
    label: string;
    day: string;
    month: string;
    year: string;
    errorMessage?: string;
    onChange(onChangeParams: { name: string; value: string }): void;
    additionalClassName?: string;
};

const DateInput: React.FC<DateInputProps> = ({
    label,
    day,
    month,
    year,
    errorMessage = '',
    onChange,
    additionalClassName = '',
}) => {
    const [width] = useWindowWidth();
    const isDesktop = width >= 992;

    useEffect(() => {}, [day, year]);

    const daysInMonth = () => {
        return getDaysInMonth(new Date(Number(year), Number(month) - 1));
    };

    return (
        <fieldset className={`date-input ${additionalClassName}`} data-testid="dateInput">
            <label className="label">{label}</label>
            <div className="date-input__container">
                <input
                    type="number"
                    name="birthDateDay"
                    value={prefixNumberWith0(Number(day))}
                    min="1"
                    max={daysInMonth()}
                    onChange={(e) => onChange(e.target)}
                    className="date-input__day"
                />
                <span />
                <select
                    name="birthDateMonth"
                    id=""
                    value={month}
                    onChange={(e) => onChange(e.target)}
                    className="date-input__month select-input"
                >
                    {months.map((month, index) => (
                        <option value={index + 1} key={index + 1}>
                            {isDesktop ? month : prefixNumberWith0(index + 1)}
                        </option>
                    ))}
                </select>
                <span />
                <input
                    type="number"
                    name="birthDateYear"
                    value={year}
                    min="1920"
                    max={new Date().getFullYear().toString()}
                    onChange={(e) => onChange(e.target)}
                    className="date-input__year"
                />
            </div>
            <InputError errorMessage={errorMessage} />
        </fieldset>
    );
};

export default DateInput;
