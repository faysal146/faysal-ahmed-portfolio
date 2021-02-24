import React from 'react';
import Header from 'components/header';
import Hero from 'components/hero';
import TachSlider from 'components/tach-slider';
import LoveWhatYouDo from 'components/quotes/love_what_you_do';
import About from 'components/about';
import EverPositive from 'components/quotes/ever_positive';
import Skills from 'components/skills';

export default function Home() {
    return (
        <>
            <div className='min-h-screen flex flex-col'>
                <Header />
                <Hero />
                <TachSlider />
            </div>
            <LoveWhatYouDo />
            <About />
            <EverPositive />
            <Skills />
        </>
    );
}
