import React from 'react';
import { sampleExperiences } from '../sampleData';

export const DropdownMenu = ({ sampleUrlLink }) => {

    const arrayLength = sampleUrlLink.length ? sampleUrlLink.length : 0;
    const dropdownButton =
        sampleUrlLink.map((element, index) =>
            <a href={element.url} data-bs-toggle='tooltip' key={index}>
                <i className={`bi bi-${index}${element.bootstrapIcon} dropdown-item`} data-bs-toggle='tooltip' />
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
            >
                <i className={`bi bi-${arrayLength}-circle-fill`}></i>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownButton">
                {dropdownButton}
            </div>
        </div>
    );
}