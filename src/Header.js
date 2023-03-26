import React from 'react';

import { DropdownMenu } from './components/DropdownMenu';
import { sampleUrlLink } from './sampleData';

export const Header = () => {

    const GOOGLE_FORM_URL = 'https://forms.gle/xyphXMDzDaV3Ew5L8';
    const resetInput = e => e.target.value = 'Eddie Lao';

    return (
        <div className='container justify-content-center'>
            <nav className='navbar'>
                <form className='form-inline'>
                    <div className='input-group mb-3'>
                        <DropdownMenu sampleUrlLink={sampleUrlLink} />
                        <input
                            aria-label='CandidateName'
                            className='form-control'
                            onBlur={resetInput}
                            placeholder='Eddie Lao'
                            type='text'
                        />
                            <div className='input-group-append'>
                            <a
                                href={GOOGLE_FORM_URL}
                                target='_blank'
                            >
                                <span
                                    className='input-group-text'
                                    data-bs-toggle='tooltip'
                                    title='Click to contact me'
                                >
                                    <i className='bi bi-hand-index-thumb-fill' />
                                </span>
                            </a>
                        </div>
                    </div>
                </form>
            </nav>
        </div>
    );
};