import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import { DropdownMenu } from "../../src/components/DropdownMenu";

describe('DropdownMenu component', () => {

    let container;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.replaceChildren(container);
    });

    const render = component => {
        act(() => {
            ReactDOM.createRoot(container).render(component);
        })
    };

    it('renders 0 circle fill icon when prop sample URL link has 0 length', () => {
        const emptySampleUrlLinkMock = [];

        render(<DropdownMenu sampleUrlLink={emptySampleUrlLinkMock} />);
        const BSIcon = document.querySelector('i[class*="bi-0-circle-fill"]');

        expect(BSIcon).toBeTruthy();
    });
});