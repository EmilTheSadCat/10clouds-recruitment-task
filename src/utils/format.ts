export const prefixNumberWith0 = (num: number): string => {
    if (num >= 10) return num.toString();
    return `0${num}`;
};

export const formatMobilePhoneNumber = (phoneNumberValue: string): string => {
    const phoneNumberArr = phoneNumberValue
        .replace(/\s/g, '')
        .replace(/[a-zA-Z]/g, '')
        .split('');

    let formattedArr = [];
    for (let i = 0; i < phoneNumberArr.length; i++) {
        i % 3 === 0 && i !== 0 && formattedArr.push(' ');
        formattedArr.push(phoneNumberArr[i]);
    }
    return formattedArr.join('');
};
