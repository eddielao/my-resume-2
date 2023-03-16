import { Tooltip } from "bootstrap";
import React, { Fragment, useEffect, useState } from "react";
import { Experience } from "./Experience";
import { Header } from "./Header";

export const ExperienceDateView = ({ experiences }) => {

    //#region properties
    const
        chosenTextColor = '\chosen-text-font',
        viewID = 'experienceDateView';
    const keyboard = (<h1><i class="bi bi-keyboard"></i></h1>);
    const latestExperienceIndex = 0;
    const [chosen, setChosen] = useState();
    const [hovered, setHovered] = useState();
    const [selectedExperience, setSelectedExperience] = useState(latestExperienceIndex);
    const toMonthYear = startsIn => {
        const [m, y] = new Date(startsIn).toLocaleDateString('en-US',
            { year: '2-digit', month: 'short' }).split(' ');
        return `${m} '${y}`;
    };

    const experienceList = experiences && experiences.length > 0 ?
        experiences.map((element, index) =>
            <li key={element.startsIn+element.company.fullName}>
                <button
                    onClick={() => {
                        setChosen(index);
                        setSelectedExperience(index);
                    }}
                    className={
                        `
                        ${chosen === index ? chosenTextColor : '' }
                        list-group-item list-group-item-action
                        ${hovered === index ? 'active' : ''}
                        `
                    }
                    // onMouseOver={() => setHovered(index)}
                    onMouseLeave={() => setHovered()}
                    type='button'>
                    {hovered === index ?
                        <span className="company-logo">
                            {element.title}
                        </span>
                        :
                        <div className="text-center"
                            data-bs-toggle="tooltip"
                            title={element.title}>
                            {(element.company.logo ?
                                <img className="company-logo" src={element.company.logo} /> :
                                 keyboard
                            )}
                        </div>
                    }
                </button>
            </li>
        )
        :
        "";

    const experienceDateView = experiences && experiences.length > 0 ?
        <Experience experience={experiences[selectedExperience]} />
        :
        <p>There are no experiences.</p>;
    //#endregion properties

    useEffect(() => {
        const tooltipTriggerElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        for (let i = 0; i < tooltipTriggerElements.length; i++) {
            new Tooltip(tooltipTriggerElements[i]);
        };
    }, []);

    return (
        <Fragment>
            <Header />
            <div className="row" id={viewID}>
                <ul className="col-2 list-group">
                    {experienceList}
                </ul>
                <div className="col-10">
                    {experienceDateView}
                </div>
            </div>
        </Fragment>
    );
};