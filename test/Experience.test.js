import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import { ExperienceDayView } from '../src/ExperienceDayView';

describe('ExperienceDayView', () => {
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
        render(<ExperienceDayView experiences={ [] } />);

        expect(document.querySelector('div#experienceDayView')).not.toBeNull();
    });

    it('renders an OL element to display experiences', () => {
        render(<ExperienceDayView experiences={ [] } />);

        const listElement = document.querySelector('ol');
        expect(listElement).not.toBeNull();
    });

    it('renders an LI for each experience', () => {
        const yearMonthDate = new Date();
        const experiences = [
            { startsAt: yearMonthDate.setFullYear(2020, 11) },
            { startsAt: yearMonthDate.setFullYear(2021, 11) }
        ];

        render(<ExperienceDayView experiences={experiences} />);
        const listChildren = document.querySelectorAll('ol > li');
        expect(listChildren).toHaveLength(2);
    });
});