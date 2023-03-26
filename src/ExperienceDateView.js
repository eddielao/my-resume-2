import { Tooltip } from "bootstrap";
import React, { Fragment, useEffect, useState } from "react";
import { Experience } from "./Experience";
import { Header } from "./Header";

export const ExperienceDateView = ({ experiences }) => {

    //#region properties
    const viewID = 'experienceDateView';
    const keyboard = (<h1><i className="bi bi-keyboard"></i></h1>);
    const latestExperienceIndex = 0;
    const [hovered, setHovered] = useState();
    const [selectedExperience, setSelectedExperience] = useState(latestExperienceIndex);

    const experienceList = experiences && experiences.length > 0 ?
        experiences.map((element, index) =>
            <li
                className='no-bullet'
                key={element.startsIn+element.company.fullName}
            >
                <button
                    onClick={() => {
                        setSelectedExperience(index);
                    }}
                    className={`list-group-item list-group-item-action ${hovered === index ? 'active' : ''}`}
                    onMouseOver={() => setHovered(index)}
                    onMouseLeave={() => setHovered()}
                    type='button'
                >
                    <div className="text-center"
                        data-bs-toggle="tooltip"
                        title={element.title}>
                        {(element.company.logo ?
                            <img className="bg-secondary company-logo" src={element.company.logo} /> :
                            keyboard
                        )}
                    </div>
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
                <ul className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2 list-group">
                    {experienceList}
                </ul>
                <div className="col-6 col-sm-8 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                    {experienceDateView}
                </div>
            </div>
        </Fragment>
    );
};