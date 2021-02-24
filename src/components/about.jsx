import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import FB from 'assets/facebook.svg';
import GitHub from 'assets/github.svg';
import Twitter from 'assets/twitter.svg';

export default () => {
    // const ref = React.useRef();
    // React.useEffect(() => {
    //     const topPosition = ref.current.offsetTop;
    //     window.addEventListener('scroll', () => {
    //         const scrollPosition = window.scrollY + window.innerHeight;
    //         console.log(scrollPosition, topPosition);
    //         if (scrollPosition > topPosition) {
    //             // trigger animation
    //             console.log('animation tigger');
    //         }
    //     });
    // }, []);
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    description
                }
            }
            imageSharp(fixed: { originalName: { eq: "faysal.jpg" } }) {
                fixed(width: 350) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    `);
    return (
        <section className='py-4'>
            {'<about>'}
            <div className='container mx-auto flex items-center'>
                <code
                    className='font-codeFont text-2xl font-bold flex-grow'
                    style={{ flexBasis: '60%' }}
                >
                    <span className='text-yellow-500'>(</span>
                    <span className='text-purple-500'>async</span>{' '}
                    <span className='text-blue-500'>function</span>
                    <span className='text-yellow-500'>()</span>{' '}
                    <span className='text-green-500'>{'{'} </span>
                    <br />
                    <span className='text-indigo-500 ml-8 mt-4 inline-block'>return</span>`
                    <div className='text-xl ml-16 mt-2'>{data.site.siteMetadata.description}</div>
                    `
                    <br />
                    <span className='text-green-500'>{'}'}</span>
                    <span className='text-yellow-500'>)</span>
                    <span className='text-yellow-500'>()</span>
                </code>
                <div style={{ flexBasis: '40%' }}>
                    <div className='image-container w-72 relative mx-auto'>
                        <div className='image-wrapper  mx-auto h-96  overflow-hidden'>
                            <BackgroundImage
                                Tag='div'
                                className='image'
                                fixed={data.imageSharp.fixed}
                                backgroundColor={`#040e18`}
                                style={{ height: '120%', width: '100%' }}
                            ></BackgroundImage>
                        </div>
                        <div
                            className='flex absolute items-center space-x-5 justify-center w-full'
                            style={{ bottom: '-70px' }}
                        >
                            <a href='#'>
                                <GitHub className='w-5' />
                            </a>
                            <a href='#'>
                                <FB className='w-5' />
                            </a>
                            <a href='#'>
                                <Twitter className='w-5' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {'</about>'}
        </section>
    );
};
