import React from 'react';

export default () => {
    return (
        <section className='relative h-96'>
            <blockquote className='absolute top-0 bottom-0 left-0 right-0 text-center mx-auto h-3/4 my-auto'>
                <svg
                    id='quote2TextSVG'
                    x='0'
                    y='0'
                    viewBox='0 0 455.3 443'
                    className='w-full h-full overflow-hidden'
                >
                    <polyline
                        id='quotePositiveTop'
                        className='quotePositiveLines'
                        points='199.1,74.2 164.9,15 17.1,271 312.7,271 240.7,146.3 '
                        style={{ strokeDashoffset: '0px' }}
                    ></polyline>
                    <polyline
                        id='quotePositiveBottom'
                        className='quotePositiveLines'
                        points='256.8,364 293.7,428 441.4,172 145.9,172 216.2,293.8 '
                        style={{ strokeDashoffset: '0px' }}
                    ></polyline>
                    <rect x='169.9' y='69.9' className='quoteTextBG' width='93' height='82'></rect>
                    <rect x='192.4' y='289.5' className='quoteTextBG' width='93' height='82'></rect>
                    <text
                        x='183.7278'
                        y='137.4443'
                        id='quote2TextTop'
                        className='quoteText'
                        data-svg-origin='183.71875 79.625'
                        transform='matrix(1,0,0,1,0,0)'
                    >
                        “EVER POSITIVE
                    </text>
                    <text
                        x='-0.7144'
                        y='356.3108'
                        id='quote2TextBottom'
                        className='quoteText'
                        data-svg-origin='-2.09375 298.5'
                        transform='matrix(1,0,0,1,0,0)'
                    >
                        NEVER NEGATIVE”
                    </text>
                </svg>
            </blockquote>
        </section>
    );
};
