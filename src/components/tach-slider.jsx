import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Slider from 'react-slick';

const settings = {
    dots: false,
    accessibility: false,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    speed: 600,
    autoplaySpeed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: false,
    touchMove: true,
    focusOnSelect: true,
    cssEase: 'cubic-bezier(.25,.55,.18,1.03)',
};

export default () => {
    const {
        allFile: { nodes },
    } = useStaticQuery(graphql`
        query {
            allFile(filter: { dir: { regex: "/slider-images/" } }) {
                nodes {
                    childImageSharp {
                        fixed(height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    `);

    return (
        <section>
            <Slider {...settings}>
                {nodes
                    .sort((a, b) => {
                        const value1 = /\d+\.(.*).png$/g.exec(a.childImageSharp.fixed.src);
                        const value2 = /\d+\.(.*).png$/g.exec(b.childImageSharp.fixed.src);
                        const numofval1 = +/\d+/g.exec(value1[0])[0];
                        const numofval2 = +/\d+/g.exec(value2[0])[0];
                        a.title = value1[1];
                        return numofval1 - numofval2;
                    })
                    .map((image, index) => {
                        return (
                            <div key={Math.random()}>
                                <Img
                                    title={image.title}
                                    fixed={image.childImageSharp.fixed}
                                    style={{ margin: 'auto', display: 'block' }}
                                />
                            </div>
                        );
                    })}
            </Slider>
        </section>
    );
};
