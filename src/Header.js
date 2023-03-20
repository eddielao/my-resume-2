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
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Eddie Lao'
                            aria-label='CandidateName'
                            disabled
                        />
                    </div>
                </form>
            </nav>
        </div>
    );
};