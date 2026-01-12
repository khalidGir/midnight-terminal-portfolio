import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: '#f8fafc', // Slate 50
                    secondary: '#ffffff', // White
                },
                text: {
                    primary: '#0f172a', // Slate 900
                    secondary: '#475569', // Slate 600
                    muted: '#94a3b8', // Slate 400
                },
                accent: {
                    primary: '#4f46e5', // Indigo 600
                    hover: '#4338ca', // Indigo 700
                },
                status: {
                    success: '#10b981',
                    warning: '#f59e0b',
                },
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
                heading: ['"Playfair Display"', 'serif'],
            },
            boxShadow: {
                'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            },
        },
    },
    plugins: [],
}

export default config
