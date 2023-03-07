import React from "react";

import { Experience } from "./Experience";

export const ExperienceDateView = ({ experiences }) => {

    const toMonthYear = startsAt => {
        const [m, y] = new Date(startsAt).toLocaleDateString('en-US',
            { year: 'numeric', month: 'short' }).toUpperCase().split(' ');
        return `${m} ${y}`;
    };

    const experienceDateView =
        experiences.length === 0 ?
        <p>There are no experiences.</p>
        :
        <Experience experience={experiences[0]} />;

    return (
        <div id="experienceDayView">
            <ol>
                {experiences.map(element =>
                    <li key={element.startsAt}>
                        <button type='button'>
                            DateIcon: {toMonthYear(element.startsAt)}
                        </button>
                    </li>
                )}
            </ol>
            {experienceDateView}
        </div>
    );
};