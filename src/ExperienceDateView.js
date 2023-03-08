import React, { useState } from "react";

import { Experience } from "./Experience";

export const ExperienceDateView = ({ experiences }) => {

    const viewID = 'experienceDateView';
    const latestExperienceIndex = 0;
    const [selectedExperience, setSelectedExperience] = useState(latestExperienceIndex);
    const toMonthYear = startsIn => {
        const [m, y] = new Date(startsIn).toLocaleDateString('en-US',
            { year: 'numeric', month: 'short' }).toUpperCase().split(' ');
        return `${m} ${y}`;
    };

    const experienceList = experiences && experiences.length > 0 ?
        experiences.map((element, index) =>
            <li key={element.startsIn}>
                <button onClick={() => setSelectedExperience(index)} type='button'>
                    DateIcon: {toMonthYear(element.startsIn)}
                </button>
            </li>
        )
        :
        "";

    const experienceDateView = experiences && experiences.length > 0 ?
        <Experience experience={experiences[selectedExperience]} />
        :
        <p>There are no experiences.</p>;

    return (
        <div id={viewID}>
            <ol>
                {experienceList}
            </ol>
            {experienceDateView}
        </div>
    );
};