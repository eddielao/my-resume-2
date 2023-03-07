import React from "react";

export const ExperienceDateView = ({ experiences }) => {

    const toMonthYear = startsAt => {
        const [m, y] = new Date(startsAt).toLocaleDateString('en-US',
            { year: 'numeric', month: 'short' }).toUpperCase().split(' ');
        return `${m} ${y}`;
    }

    return (
        <div id="experienceDayView">
            <ol>
                {experiences.map(element =>
                    <li key={element.startsAt}>
                        DateIcon: {toMonthYear(element.startsAt)}
                    </li>
                )}
            </ol>
        </div>
    );
};