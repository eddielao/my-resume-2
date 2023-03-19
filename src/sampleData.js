import usaf from './media/usaf.png';
import vinculums from './media/vinculums.png';
import wf from './media/wf.png';

const BOOTSTRAP_NUM_ICON = '-circle-fill';
const
    GITHUB_URL = 'https://github.com/eddielao',
    LINKEDIN_URL = 'https://linkedin.com/in/eddielao';


class Company {
    fullName;
    shortName;
    logo;
    constructor(fullName, shortName=null, logo=null) {
        this.fullName = fullName;
        this.shortName = shortName;
        this.logo = logo;
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

class urlLink {
    url;
    bootstrapIcon;
    constructor(icon, url=null) {
        this.bootstrapIcon = icon;
        this.url = url;
    }
}

export const sampleExperiences = [
    new Experience(1999, 11, new Company('United States Air Force', 'USAF', usaf), 'Programming Specialist'),
    new Experience(2005, 5, new Company('Vinculums', 'V', vinculums), 'Database Engineer'),
    new Experience(2014, 5, new Company('Blackwave Telecom', 'BW'), 'Database Engineer'),
    new Experience(2017, 7, new Company('Wells Fargo', 'WF', wf), 'Software Engineer')
];

export const sampleUrlLink = [
    new urlLink(BOOTSTRAP_NUM_ICON, GITHUB_URL),
    new urlLink(BOOTSTRAP_NUM_ICON, LINKEDIN_URL)
];