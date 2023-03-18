import React from 'react';

export const DropdownMenu = () => {

    return (
        <div className="dropdown">
            <button
                aria-expanded={false}
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                id="dropdownButton"
                type="button"
            >
                Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownButton">
                <a href="#" className="dropdown-item">First item</a>
                <a href="#" className="dropdown-item">Second item</a>
                <a href="#" className="dropdown-item">Third item</a>
            </div>
        </div>
    );
}