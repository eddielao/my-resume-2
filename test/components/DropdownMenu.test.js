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

    const sampleUrlLinkMock = [
        { bootStrapIcon: 'mockIcon1', url: 'mockUrl1' },
        { bootStrapIcon: 'mockIcon2', url: 'mockUrl2' },
        { bootStrapIcon: 'mockIcon3', url: 'mockUrl3' },
        { bootStrapIcon: 'mockIcon4', url: 'mockUrl4' },
        { bootStrapIcon: 'mockIcon5', url: 'mockUrl5' }
    ];

    it('renders correct numbered circle fill icon when prop sample URL link has 0 length', () => {
        const
            emptySampleUrlLinkMock = [],
            threeSampleUrlLinkMock = [sampleUrlLinkMock[0], sampleUrlLinkMock[1], sampleUrlLinkMock[2]],
            fiveSampleUrlLinkMock = [sampleUrlLinkMock[0], sampleUrlLinkMock[1], sampleUrlLinkMock[2],
                sampleUrlLinkMock[3], sampleUrlLinkMock[4]];

        render(<DropdownMenu sampleUrlLink={emptySampleUrlLinkMock} />);
        const BSIcon = document.querySelector('button > i');
        expect(BSIcon.className).toContain('bi-0-circle-fill');
    });
});