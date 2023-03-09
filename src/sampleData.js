class Company {
    fullName;
    shortName;
    constructor(fullName, shortName=null) {
        this.fullName = fullName;
        this.shortName = shortName;
    }
}

class Experience {
    title;
    startsIn;
    company = new Company();
    accomplishment = [];
    constructor(year, month, company, title) {
        this.startsIn = this.inYearMonth(year, month);
        this.company = company;
        this.title = title;
    }

    inYearMonth (year, month) { return new Date().setFullYear(year, month); }
};

export const sampleExperiences = [
    new Experience(1999, 11, new Company('United States Air Force', 'USAF'), 'Programming Specialist'),
    new Experience(2005, 5, new Company('Vinculums'), 'Database Software Engineer'),
    new Experience(2014, 5, new Company('Blackwave Telecom'), 'Database Software Engineer'),
    new Experience(2017, 7, new Company('Wells Fargo'), 'Senior Software Engineer')
];