import bw from './media/blackwave.png';
import usaf from './media/usaf.png';
import vinculums from './media/vinculums.png';
import wf from './media/wf.png';

const
    BOOTSTRAP_GH_ICON = 'bi bi-github',
    BOOTSTRAP_LI_ICON = 'bi bi-linkedin',
    BOOTSTRAP_NUM_ICON = '-circle-fill';
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
        this.startsIn = [year, month];
        this.company = company;
        this.title = title;
    }
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
    new Experience(1999, 'Nov', new Company('United States Air Force', 'USAF', usaf), 'Programming Specialist'),
    new Experience(2005, 'May', new Company('Vinculums', 'V', vinculums), 'Database Engineer'),
    new Experience(2014, 'May', new Company('Blackwave Telecom', 'BW', bw), 'Database Engineer'),
    new Experience(2017, "Jul", new Company('Wells Fargo', 'WF', wf), 'Software Engineer')
];

export const sampleUrlLink = [
    new urlLink(BOOTSTRAP_GH_ICON, GITHUB_URL),
    new urlLink(BOOTSTRAP_LI_ICON, LINKEDIN_URL)
];