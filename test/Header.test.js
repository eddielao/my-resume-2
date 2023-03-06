import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import { Header } from '../src/Header';

describe("Header", () => {
    let container;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });

    it('renders my first name', () => {
        const customer = { firstName: "Eddie" };
        // const component = (<Header customer={customer} />),
        const component = <Header customer={customer} />;

        act(() => {
            ReactDOM.createRoot(container).render(component);
        });

        expect(document.body.textContent).toContain('Eddie');
    });

    it('renders another name', () => {
        const customer = { firstName: "Amber" };
        const component = <Header customer={customer} />;

        act(() => {
            ReactDOM.createRoot(container).render(component);
        });

        expect(document.body.textContent).toContain('Amber');
    });
});