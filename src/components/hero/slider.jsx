import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: false,
    accessibility: false,
    arrows: false,
    autoplay: true,
    draggable: false,
    speed: 200,
    autoplaySpeed: 4000,
    swipe: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    pauseOnHover: false,
    touchMove: false,
    focusOnSelect: false,
};

export default () => {
    const {
        site: {
            siteMetadata: { titleKeywords },
        },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    titleKeywords
                }
            }
        }
    `);
    const [activeKeyword, setActiveKeyword] = useState(1);
    useEffect(() => {
        setInterval(() => {
            setActiveKeyword(prev => (prev >= titleKeywords.length ? 1 : prev + 1));
        }, 1000);
        console.log('from use effect');
    }, [titleKeywords]);
    return (
        <div className='text-xl'>
            <div className='flex items-center mb-3'>
                <span className='mr-2 inline-block'>Need</span>
                <Slider {...settings}>
                    {titleKeywords.map(el => {
                        return (
                            <p key={Math.random()} className='text-4xl slider-text'>
                                {el}?
                            </p>
                        );
                    })}
                </Slider>
            </div>
            <span className='block mb-3'>There’s a solution for that.</span>
            <button className='py-2 px-6 text-center bg-purple-600 rounded'>Let's Talk</button>
        </div>
    );
};
