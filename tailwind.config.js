export default {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/react-tailwindcss-select/dist/index.esm.js'],
    theme: {
        extend: {
            fontFamily: {
                'montserrat': ['Montserrat']
            },
            colors: {
                primary: '#160430',
                secondary: '#261046',
                tertiary: '#9d5ce9',
                quaternary: '#e2cdff',
                gradient1: '#501793',
                gradient2: '#3e6ea1',
                gradientSimulationBox1: 'rgba(143, 104, 206, 0.40)',
                gradientSimulationBox2: 'rgba(125, 101, 160, 0.40)',
                gradientSimulationBox1alt: 'rgba(143, 104, 206, 0.2)',
                gradientSimulationBox2alt: 'rgba(143, 104, 206, 0.2)',
                RoomButtonGradient1:'#501794',
                RoomButtonGradient2:'#7E5DAF',
                homeBg:'#F5F7FA',
                footer:'#331A57',
                stats:'#7B6C93'
                
            },
        },
    },
    plugins: [
       
    ],
};
