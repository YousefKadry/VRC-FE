export default {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/react-tailwindcss-select/dist/index.esm.js'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat'],
            },
            colors: {
                primary: '#000000',
                secondary: '#141414',
                tertiary: '#9d5ce9',
                quaternary: '#e2cdff',
                gradient1: '#501793',
                gradient2: '#3e6ea1',
                gradientSimulationBox1: 'rgba(143, 104, 206, 0.40)',
                gradientSimulationBox2: 'rgba(125, 101, 160, 0.40)',
                gradientSimulationBox1alt: 'rgba(143, 104, 206, 0.2)',
                gradientSimulationBox2alt: 'rgba(143, 104, 206, 0.2)',
                RoomButtonGradient1: '#501794',
                RoomButtonGradient2: '#7E5DAF',

                homeBg: '#F5F7FA',
                footer: '#331A57',
                stats: '#7B6C93',

                'text-bg': 'rgb(var(--text-bg))',

                // simulation-room
                'simulation-room-bg': 'rgb(var(--simulation-room-bg))',
                'simulation-room-sidebar-bg': 'rgb(var(--simulation-room-sidebar-bg))',
                'simulation-room-sidebar-color': 'rgb(var(--simulation-room-sidebar-color))',
                'simulation-room-sidebar-menu-bg': 'rgb(var(--simulation-room-sidebar-menu-bg))',
                'simulation-room-sidebar-menu-color': 'rgb(var(--simulation-room-sidebar-menu-color))',
                'simulation-room-gradient-from': 'rgb(var(--simulation-room-gradient-from))',
                'simulation-room-gradient-to': 'rgb(var(--simulation-room-gradient-to))',
                'simulation-room-gradient-color': 'rgb(var(--simulation-room-gradient-color))',
            },
        },
    },
    plugins: [],
};
