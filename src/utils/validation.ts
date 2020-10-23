import differenceInYears from 'date-fns/differenceInYears';

enum ErrorMessage {
    TOO_YOUNG = 'You should be at least 18 years old',
    TOO_SHORT = 'Input should have at least 3 characters',
    NOT_SELECTED = 'Select option',
    INVALID_PHONE_NUMBER = 'Mobile number should have 9 digits',
}

export const validateNameInput = (value: string): string => {
    if (value.length < 3) return ErrorMessage.TOO_SHORT;
    return '';
};

export const validatePhoneNumberInput = (value: string): string => {
    if (value.replace(/\s/g, '').length !== 9) return ErrorMessage.INVALID_PHONE_NUMBER;
    return '';
};

export const validateBirthDateInput = (days: string, months: string, years: string): string => {
    const inputDate = new Date(Number(years), Number(months), Number(days));
    const difference = differenceInYears(new Date(), inputDate);
    if (difference < 18) return ErrorMessage.TOO_YOUNG;

    return '';
};

export const validateIfOpionSelected = (value: string) => {
    if (value === '') return ErrorMessage.NOT_SELECTED;
    return '';
};
