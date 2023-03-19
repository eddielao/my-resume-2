import React from 'react';
import { sampleExperiences } from '../sampleData';

export const DropdownMenu = ({ sampleUrlLink }) => {

    const arrayLength = sampleUrlLink.length ? sampleUrlLink.length : 0;
    const dropdownButton =
        sampleUrlLink.map((element, index) =>
            <a
                href={element.url}
                data-bs-toggle='tooltip'
                key={index}
                target='_blank'
            >
                <i className={`${element.bootstrapIcon} dropdown-item`} />
            </a>
        );

    return (
        <div className="dropdown">
            <button
                aria-expanded={false}
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                id="dropdownButton"
                type="button"
                title={`Click to see ${arrayLength} other profile links`}
            >
                <i className={`bi bi-${arrayLength}-circle-fill`} />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownButton">
                {dropdownButton}
            </div>
        </div>
    );
}