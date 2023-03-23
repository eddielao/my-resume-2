import React from 'react';

export const Experience = ({ experience }) =>
    <div className='card'>
        <h3>{experience.title}</h3>
        <div className='card-body'>
            {experience.company.fullName}
        </div>
    </div>;