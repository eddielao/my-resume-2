import React from "react";

export const ExperienceDayView = ({ experiences }) =>
    <div id="experienceDayView">
        <ol>
            {experiences.map(element =>
                <li key={element.startsAt}>
                    Period: {element.startsAt}
                </li>
            )}
        </ol>
    </div>;