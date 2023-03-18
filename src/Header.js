import React from 'react';

import { DropdownMenu } from './components/DropdownMenu';

export const Header = () => {

    return (
        <div className='container justify-content-center'>
            <nav className='navbar navbar-light bg-light'>
                <form className='form-inline'>
                    <div className='input-group'>
                        {/* <DropdownMenu /> */}
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