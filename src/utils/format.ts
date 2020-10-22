export const prefixNumberWith0 = (num: number): string => {
    if (num >= 10) return num.toString();
    return `0${num}`;
};
