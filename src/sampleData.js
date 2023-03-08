const monthYearDate = new Date();

const inYearMonth = (year, month) => monthYearDate.setFullYear(year, month);

export const sampleExperiences = [
    {
        startsIn: inYearMonth(1999, 11),
        company: { fullName: 'United States Air Force' }
    },
    {
        startsIn: inYearMonth(2005, 5),
        company: { fullName: 'Vinculums' }
    },
    {
        startsIn: inYearMonth(2014, 5),
        company: { fullName: 'Blackwave Telecom' }
    },
    {
        startsIn: inYearMonth(2017, 7),
        company: { fullName: 'Wells Fargo' }
    }
];