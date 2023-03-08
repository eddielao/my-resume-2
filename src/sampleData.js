const monthYearDate = new Date();

const inYearMonth = (year, month) => monthYearDate.setFullYear(year, month);

export const sampleExperiences = [
    {
        startsIn: inYearMonth(2020, 10),
        company: { fullName: 'United States Air Force' }
    },
    {
        startsIn: inYearMonth(2021, 11),
        company: { fullName: 'Vinculums' }
    }
];