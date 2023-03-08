class Company {
    fullName;
    shortName;
    constructor(fullName, shortName=null) {
        this.fullName = fullName;
        this.shortName = shortName;
    }
}

class Experience {
    startsIn;
    company;
    constructor(year, month, company) {
        this.startsIn = this.inYearMonth(year, month);
        this.company = company;
    }

    inYearMonth (year, month) { return new Date().setFullYear(year, month); }
};

export const sampleExperiences = [
    new Experience(1999, 11, new Company('United States Air Force', 'USAF')),
    new Experience(2005, 5, new Company('Vinculums')),
    new Experience(2014, 5, new Company('Blackwave Telecom')),
    new Experience(2017, 7, new Company('Wells Fargo'))
];