import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import { Experience } from '../src/Experience';
import { ExperienceDateView } from '../src/ExperienceDateView';

describe("Experience", () => {
    let container;
    const render = component => {
        act(() => {
            ReactDOM.createRoot(container).render(component);
        });
    };

    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });

    it('renders company full name', () => {
        const companyFullName = 'United States Air Force';
        const experienceMock = {
            company: { fullName: companyFullName },
            startsIn: [1999, 'Dec']
        };

        render(<Experience experience={experienceMock} />);

        expect(document.body.textContent).toContain(companyFullName);
    });

    it('renders another company full name', () => {
        const companyFullName = 'Vinculums';
        const experience = { company: { fullName: companyFullName } };

        render(<Experience experience={experience} />);

        expect(document.body.textContent).toContain(companyFullName);
    });
});

describe('ExperienceDayView', () => {
    const yearMonthDate = new Date();
    const twoExperiences = [
        {
            startsIn: yearMonthDate.setFullYear(2020, 10),
            company: { fullName: 'United States Air Force' }
        },
        {
            startsIn: yearMonthDate.setFullYear(2021, 11),
            company: { fullName: 'Vinculums' }
        }
    ];
    let container;
    beforeEach(()=> {
        container = document.createElement('div');
        document.body.replaceChildren(container);
    });

    const render = component =>
        act(() => {
            ReactDOM.createRoot(container).render(component);
        });

    it('renders a div with the right ID', () => {
        render(<ExperienceDateView experiences={ [] } />);

        expect(document.querySelector('div#experienceDateView')).not.toBeNull();
    });

    it('renders an UL element to display experiences', () => {
        render(<ExperienceDateView experiences={ [] } />);

        const listElement = document.querySelector('ul');
        expect(listElement).not.toBeNull();
    });

    it('renders a LI for each experience', () => {
        render(<ExperienceDateView experiences={twoExperiences} />);
        const listChildren = document.querySelectorAll('ul > li');
        expect(listChildren).toHaveLength(2);
    });

    it('renders the month and year of each experience', () => {
        render(<ExperienceDateView experiences={twoExperiences} />);
        const listChildren = document.querySelectorAll('li');

        expect(listChildren[0].textContent)
            .toEqual('Nov \'20');
        expect(listChildren[1].textContent)
            .toEqual('Dec \'21');
    });

    it('initially shows a message saying there are no experiences', () => {
        render(<ExperienceDateView experiences={ [] } />);

        expect(document.body.textContent).toContain(
            'There are no experiences.'
        );
    });

    it('selects the latest experience by default', () => {
        render(<ExperienceDateView experiences={twoExperiences} />);

        expect(document.body.textContent).toContain('United States Air Force');
    });

    it('has a button element in each LI', () => {
        render(<ExperienceDateView experiences={twoExperiences} />);

        const buttons = document.querySelectorAll('li > button');

        expect(buttons.length).toEqual(2);
        expect(buttons[0].type).toEqual('button');
    });

    it('renders another experience when selected', () => {
        render(<ExperienceDateView experiences={twoExperiences} />);

        const button = document.querySelectorAll('button')[1];
        act(() => button.click());

        expect(document.body.textContent).toContain('Vinculums')
    });
});