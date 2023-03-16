import React from 'react';

export const Experience = ({ experience }) =>
    <div className=''>
        <h3>{experience.title}</h3>
        {experience.company.fullName}
    </div>;