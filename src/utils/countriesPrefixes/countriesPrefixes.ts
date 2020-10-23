import countries from './countries.json';

const countriesPrefixesSortedByPrefix = Object.entries(countries)
    .sort((a: any, b: any) => a[1].Dial_Code - b[1].Dial_Code)
    .map((element) => ({
        prefix: element[1].Dial_Code,
        code: element[1].ISO_Code,
    }));

export default countriesPrefixesSortedByPrefix;
