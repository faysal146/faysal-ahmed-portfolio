import React from 'react';
import Github from 'assets/github.svg';

export default () => {
    return (
        <header className='py-4 px-5 flex justify-between items-center'>
            <h2 className='font-logoFont text-2xl'>faysalAhmed()</h2>
            <nav className='space-x-4'>
                <a href=''>about()</a>
                <a href=''>project()</a>
                <a href=''>contact()</a>
                <a href=''>skills()</a>
                <a href=''>
                    <Github className='inline-block' />
                </a>
            </nav>
        </header>
    );
};
