import React from 'react';

function ProgressBar({ label = 'ReactJS', progress = 0, color = 'bg-green-500' }) {
    return (
        <div className='space-y-2 mb-6'>
            <p className='tracking-wider text-xl font-logoFont'>{label}</p>
            <div class='h-1 overflow-hidden relative rounded-3xl bg-gray-700 '>
                <span
                    className={color + ' absolute block h-full'}
                    style={{ width: progress + '%' }}
                ></span>
            </div>
        </div>
    );
}

function Card({ title, description }) {
    return (
        <div className='p-6' style={{ flexBasis: '50%', boxShadow: '0px 0px 5px 1px #00000066' }}>
            <h2 className='font-logoFont text-xl'>{title}</h2>
            <p className='mt-2'>{description}</p>
        </div>
    );
}

function SkillTools({ label, items }) {
    return (
        <div>
            <h3 className='font-bold font-secondaryFont text-xl'>{label}</h3>
            <ul className='grid grid-cols-5 py-10 px-6 capitalize'>
                {items.map(item => (
                    <li className='skills-item relative pl-6 py-3'>{item}</li>
                ))}
            </ul>
        </div>
    );
}

const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'Sass/Scss',
    'bootstrap',
    'tailwind css',
    'jquery',
    'reactjs',
    'vuejs',
    'redux',
    'typescript',
    'firebase',
    'mongodb',
    'postgress',
    'nodejs',
    'express',
    'graphql',
    'socket.io',
    'wordpress',
    'woocommerce',
];

const tools = [
    'vscode',
    'Chrome DevTools',
    'react dev tools',
    'vue dev tools',
    'redux dev tools',
    'sass',
    'webpack',
    'parcel',
    'bable',
    'git',
    'GitHub',
    'figma',
    'postman',
    'eslint',
    'npm',
    'yarn',
    'jest',
    'docker',
    'canva',
];

export default () => {
    return (
        <section className='container px-4 mx-auto'>
            <span className='block text-xl'>{'<skills>'}</span>
            <div className='flex flex-wrap'>
                <div
                    style={{ flexBasis: '54%' }}
                    className='text-xl capitalize ml-4 mt-4 tracking-wide p-5'
                >
                    I have expertise with both site front-end development and back-end development.
                    HTML, CSS, JS (TypeScript), building small and medium web apps with ReactJS or
                    VueJs features, animations, and coding interactive layouts. I have also
                    full-stack developer experience with open source CMS like (WordPress, Strapi and
                    other) Visit my
                    <a href='#'>LinkedIn</a> profile for more details or just contact me.
                </div>
                <div style={{ flexBasis: '44%' }} className='ml-auto'>
                    <ProgressBar label='ReactJS' progress={70} color='bg-green-500' />
                    <ProgressBar label='VueJS' progress={80} color='bg-blue-500' />
                    <ProgressBar label='NodeJS' progress={50} color='bg-purple-500' />
                    <ProgressBar label='Firebase' progress={60} color='bg-indigo-500' />
                </div>
                <div className='flex mt-8 space-x-6 mb-8'>
                    <Card
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam est
                            tenetur, aliquid ducimus debitis repellat provident'
                        title='Font-End Development'
                    />
                    <Card
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam est
                            tenetur, aliquid ducimus debitis repellat provident'
                        title='Back-End Development'
                    />
                    <Card
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam est
                            tenetur, aliquid ducimus debitis repellat provident'
                        title='Ecommerce Development'
                    />
                    <Card
                        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aperiam est
                            tenetur, aliquid ducimus debitis repellat provident'
                        title='Wordpress Development'
                    />
                </div>
            </div>
            <SkillTools items={skills} label='Main Skills' />
            <SkillTools items={tools} label='Tools' />
            <span className='block text-xl'>{'</skills>'}</span>
        </section>
    );
};
