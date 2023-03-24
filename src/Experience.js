import React from 'react';

export const Experience = ({ experience }) =>
    <div className='card-body'>
        <h4 className='card-title'>{experience.title}</h4>
        <div className='card-text'>
            {experience.company.fullName}
        </div>
    </div>;