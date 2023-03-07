import React, { useState } from "react";

import { Experience } from "./Experience";

export const ExperienceDateView = ({ experiences }) => {

    const [selectedExperience, setSelectedExperience] = useState(0);
    const toMonthYear = startsAt => {
        const [m, y] = new Date(startsAt).toLocaleDateString('en-US',
            { year: 'numeric', month: 'short' }).toUpperCase().split(' ');
        return `${m} ${y}`;
    };

    const experienceDateView =
        experiences.length === 0 ?
        <p>There are no experiences.</p>
        :
        <Experience experience={experiences[selectedExperience]} />;

    return (
        <div id="experienceDayView">
            <ol>
                {experiences.map((element, index) =>
                    <li key={element.startsAt}>
                        <button onClick={() => setSelectedExperience(index)} type='button'>
                            DateIcon: {toMonthYear(element.startsAt)}
                        </button>
                    </li>
                )}
            </ol>
            {experienceDateView}
        </div>
    );
};