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
        experiences && experiences.length > 0 ?
        <Experience experience={experiences[selectedExperience]} />
        :
        <p>There are no experiences.</p>;

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