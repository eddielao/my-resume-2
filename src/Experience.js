import React from 'react';

export const Experience = ({ experience }) =>
    <div className='card-body'>
        <h4 className='card-title'>{experience.title}</h4>
        <div className='card-text'>
            {experience.company.fullName}
        </div>
        <div className='card-footer'>
            &gt; { experience.startsIn[1] } { experience.startsIn[0] }
        </div>
    </div>;