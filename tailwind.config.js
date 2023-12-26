/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/react-tailwindcss-select/dist/index.esm.js'],
    theme: {
        extend: {
            colors: {
                primary: '#160430',
                secondary: '#261046',
                tertiary: '#9d5ce9',
                quaternary: '#e2cdff',
                gradient1: '#501793',
                gradient2: '#3e6ea1',
            },
        },
    },
    plugins: [],
};
