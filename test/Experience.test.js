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
        const experience = { company: { fullName: companyFullName } };

        render(<Experience experience={experience} />);

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
            startsAt: yearMonthDate.setFullYear(2020, 10),
            company: { fullName: 'United States Air Force' }
        },
        {
            startsAt: yearMonthDate.setFullYear(2021, 11),
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

        expect(document.querySelector('div#experienceDayView')).not.toBeNull();
    });

    it('renders an OL element to display experiences', () => {
        render(<ExperienceDateView experiences={ [] } />);

        const listElement = document.querySelector('ol');
        expect(listElement).not.toBeNull();
    });

    it('renders an LI for each experience', () => {
        render(<ExperienceDateView experiences={twoExperiences} />);
        const listChildren = document.querySelectorAll('ol > li');
        expect(listChildren).toHaveLength(2);
    });

    it('renders the month and year of each experience', () => {
        render(<ExperienceDateView experiences={twoExperiences} />);
        const listChildren = document.querySelectorAll('li');

        expect(listChildren[0].textContent)
            .toEqual('DateIcon: NOV 2020');
        expect(listChildren[1].textContent)
            .toEqual('DateIcon: DEC 2021');
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
});