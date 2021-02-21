import React from 'react';
import Header from 'components/header';
import Hero from 'components/hero';
import TachSlider from 'components/tach-slider';
import Quotes from 'components/quotes';

export default function Home() {
    return (
        <>
            <div className='min-h-screen flex flex-col'>
                <Header />
                <Hero />
                <TachSlider />
            </div>
            <Quotes />
            <div style={{ height: '1000px' }}></div>
        </>
    );
}
