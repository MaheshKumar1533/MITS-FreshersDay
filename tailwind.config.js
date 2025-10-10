/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'orbitron': ['Orbitron', 'monospace'],
                'poppins': ['Poppins', 'sans-serif'],
            },
            colors: {
                'neon-pink': '#ff0080',
                'neon-cyan': '#00ffff',
                'neon-purple': '#8000ff',
                'neon-green': '#00ff80',
                'neon-orange': '#ff8000',
                'neon-yellow': '#ffff00',
            },
            animation: {
                'neon-pulse': 'neonPulse 2s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
                'rotate-slow': 'rotate 20s linear infinite',
            },
            screens: {
                'xs': '475px',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            }
        },
    },
    plugins: [],
}
