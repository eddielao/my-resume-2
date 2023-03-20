import React from 'react';

import { DropdownMenu } from './components/DropdownMenu';
import { sampleUrlLink } from './sampleData';

export const Header = () => {

    return (
        <div className='container justify-content-center'>
            <nav className='navbar'>
                <form className='form-inline'>
                    <div className='input-group'>
                        <DropdownMenu sampleUrlLink={sampleUrlLink} />
                        <a
                            href='https://forms.gle/xyphXMDzDaV3Ew5L8'
                            target='_blank'
                        >
                            <input
                                aria-label='CandidateName'
                                className='form-control'
                                data-bs-toggle='tooltip'
                                
                                placeholder='Eddie Lao'
                                title='Click to contact me'
                                type='text'
                            />
                        </a>
                    </div>
                </form>
            </nav>
        </div>
    );
};