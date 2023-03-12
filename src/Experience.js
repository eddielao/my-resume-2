import React from 'react';

export const Experience = ({ experience }) =>
    <div className='col-9'>
        <h3>{experience.title}</h3>
        {experience.company.fullName}
    </div>;