import React, { useState } from "react";

import { Experience } from "./Experience";

export const ExperienceDateView = ({ experiences }) => {

    const viewID = 'experienceDateView';
    const latestExperienceIndex = 0;
    const [hovered, setHovered] = useState();
    const [selectedExperience, setSelectedExperience] = useState(latestExperienceIndex);
    const toMonthYear = startsIn => {
        const [m, y] = new Date(startsIn).toLocaleDateString('en-US',
            { year: 'numeric', month: 'short' }).toUpperCase().split(' ');
        return `${m} ${y}`;
    };

    const experienceList = experiences && experiences.length > 0 ?
        experiences.map((element, index) =>
            <li key={element.startsIn+element.company.fullName}>
                <button
                    onClick={() => setSelectedExperience(index)}
                    className={`list-group-item list-group-item-action ${hovered === index ? 'active' : ''}`}
                    onMouseOver={() => setHovered(index)}
                    onMouseLeave={() => setHovered()}
                    type='button'>
                    {toMonthYear(element.startsIn)}
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
        <div className="row" id={viewID}>
            <ul className="list-group">
                {experienceList}
            </ul>
            {experienceDateView}
        </div>
    );
};