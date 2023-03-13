import React from 'react';

export const Header = () => {

    return (
        <div className='container justify-content-center'>
            <nav className='navbar navbar-light bg-light'>
                <form className='form-inline'>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <span className='input-group-text'>@</span>
                        </div>
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