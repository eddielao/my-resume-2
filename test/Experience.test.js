import React from 'react';
import ReactDOM from 'react-dom/client';
import { act, Simulate } from 'react-dom/test-utils';

import { Experience } from '../src/Experience';
import { ExperienceDateView } from '../src/ExperienceDateView';

describe("Experience", () => {
    let container;
    const render = component => {
        act(() => {
            ReactDOM.createRoot(container).render(component);
        });
    };
    const companyFullName = 'Vinculums';
    const experienceMock = {
        company: { fullName: companyFullName },
        startsIn: [2005, 'Jun']
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
        render(<Experience experience={experienceMock} />);

        expect(document.body.textContent).toContain(companyFullName);
    });

    it('renders the month and year of each experience', () => {

        render(<Experience experience={experienceMock} />);

        expect(document.body.textContent).toContain('Jun 2005');
    });
});

describe('ExperienceDayView', () => {
    const yearMonthDate = new Date();
    const twoExperiences = [
        {
            startsIn: [2020, 'Oct'],
            company: {
                fullName: 'United States Air Force',
                logo: null
            }
        },
        {
            startsIn: [2021, 'Nov'],
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

        const button = document.querySelectorAll('button[class*="list-group-item"]')[1];
        act(() => button.click());

        expect(document.body.textContent).toContain('Vinculums')
    });

    it('activates boostrap list group item active class when mouse over', async () => {
        render(<ExperienceDateView experiences={twoExperiences} />);

        const buttons = document.querySelectorAll('li > button');
        act(() => Simulate.mouseOver(buttons[0]));

        const activeButton = document.querySelector('button[class="list-group-item list-group-item-action active"]');

        expect(activeButton).toBeTruthy();
        expect(activeButton.className).toMatch(/active$/);

        act(() => Simulate.mouseLeave(buttons[0]));

        expect(activeButton.className).not.toContain('active');
        expect(activeButton.className).not.toMatch(/active$/);
    });
});