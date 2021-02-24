import React, { useEffect, useRef } from 'react';

export default () => {
    const ref = useRef();
    const ref2 = useRef();
    const textRef = useRef();
    const textRef2 = useRef();

    useEffect(() => {
        const sectionPageOffset = ref.current;
        const unsub = window.addEventListener('scroll', function () {
            // how mayn px is scrolled => window.pageYOffset;
            const scrollPostion = window.pageYOffset + sectionPageOffset.clientHeight + 100;
            const endSection = sectionPageOffset.offsetTop + sectionPageOffset.clientHeight;
            if (
                scrollPostion >= sectionPageOffset.offsetTop &&
                scrollPostion <= sectionPageOffset.clientHeight + 100 + sectionPageOffset.offsetTop
            ) {
                const some = endSection - scrollPostion;
                const transformValue = Math.round(
                    (scrollPostion - sectionPageOffset.offsetTop) * 0.4
                );
                if (transformValue < 70) {
                    textRef.current.style.transform = `translateX(${transformValue}px)`;
                    textRef2.current.style.transform = `translateX(-${transformValue}px)`;
                }
                let vl = Math.round(some * 0.8);
                if (vl < 0 || vl > 220) return;
                ref2.current.style.strokeDashoffset = `${vl}%`;
            }
        });
        return () => {
            window.removeEventListener('scroll', unsub);
        };
    }, [ref, ref2, textRef, textRef2]);

    return (
        <section className='relative h-96' ref={ref}>
            <blockquote className='absolute top-0 bottom-0 left-0 right-0 text-center mx-auto h-2/4 my-auto'>
                <svg
                    id='quote1TextSVG'
                    className='w-full h-full overflow-visible'
                    x='0'
                    y='0'
                    viewBox='0 0 591.7 313.3'
                >
                    <polyline
                        id='quote1Heart'
                        className='quote1Heart'
                        points='191.9,118.2 128,7.3 463.8,7.3 295.9,298 233.2,189.5'
                        style={{ strokeDashoffset: `220%` }}
                        ref={ref2}
                    ></polyline>
                    <rect x='170' y='112.9' className='quoteTextBG' width='93' height='82'></rect>
                    <rect x='370' y='43.9' className='quoteTextBG' width='93' height='82'></rect>
                    <text
                        x='239.2858'
                        y='105'
                        className='quoteText quote1TextTop'
                        data-svg-origin='239.28125 52.0625'
                        transform='matrix(1,0,0,1,0,0)'
                        ref={textRef}
                    >
                        “DO WHAT YOU LOVE
                    </text>
                    <text
                        x='-0.7142'
                        y='170'
                        className='quoteText quote1TextBottom'
                        data-svg-origin='-0.71875 121.890625'
                        transform='matrix(1,0,0,1,0,0)'
                        ref={textRef2}
                    >
                        LOVE WHAT YOU DO”
                    </text>
                </svg>
            </blockquote>
        </section>
    );
};
