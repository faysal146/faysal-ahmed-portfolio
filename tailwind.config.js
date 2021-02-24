module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            mainFont: ['Quicksand', 'sans-serif'],
            secondaryFont: ['Dosis', 'sans-serif'],
            logoFont: ['Concert One', 'cursive'],
            codeFont: ["'Operator Mono Lig'", 'Dosis', 'sans-serif'],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: ['gatsby-plugin-postcss'],
};
