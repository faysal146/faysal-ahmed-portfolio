// require('dotenv').config({
//     path: `.env.${process.env.NODE_ENV}`,
// });

module.exports = {
    siteMetadata: {
        title: `Faysal Ahmed | Full Stack Javascript Web Developer`,
        description: `Hello !! My name is Faysal Ahmed and I'm a full-stack web developer who is passionate about various web technologies, Currently living in Chittagong, Bangladesh. My primary focus and inspiration for my studies on Web Development. I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques. I have experience working with LAMP stack, MERN stack. I am very passionate about Web Development and strive to better myself as a Developer, and the development community as a whole.
            Currently, I work mostly with JavaScript technologies like ReactJS, Vuejs, and NodeJS. 
            I also have hands-on experience working with cloud infrastructures like AWS/GCP and 
            have deployed applications keeping scalability in mind. Docker, Kubernetes, Jenkins, 
            SonarQube are some of the cool tools I use for CI/ CD. I'm always a learner and a 
            self-taught programmer.`,
        author: `Faysal Ahmed`,
        email: 'fahadfaysal146@gmail.com',
        titleKeywords: [
            'Web Developer',
            'React Developer',
            'Vue Developer',
            'NodeJS Developer',
            'WordPress Developer',
        ],
    },
    plugins: [
        'gatsby-plugin-postcss',
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`,
            },
        },
        {
            resolve: `gatsby-alias-imports`,
            options: {
                aliases: {
                    components: 'src/components',
                    assets: 'src/assets',
                },
                rootFolder: `src`,
            },
        },
        `gatsby-plugin-offline`,
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Quicksand', 'Concert One', 'Dosis', 'Fredoka One'],
                },
            },
        },
        `gatsby-plugin-playground`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
    ],
};
