import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                foreground: '#fafafa',
                muted: '#a1a1aa',
                'muted-foreground': '#71717a',
                border: '#27272a',
                accent: {
                    DEFAULT: '#f59e0b',
                    hover: '#d97706',
                    foreground: '#0a0a0a',
                },
                card: {
                    DEFAULT: '#18181b',
                    foreground: '#fafafa',
                },
                primary: {
                    DEFAULT: '#fafafa',
                    foreground: '#0a0a0a',
                },
            },
            fontFamily: {
                sans: ['"Geist"', 'system-ui', 'sans-serif'],
                mono: ['"Geist Mono"', 'monospace'],
                heading: ['"Geist"', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)',
                'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)',
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-out',
                'slide-up': 'slide-up 0.5s ease-out',
                'slide-down': 'slide-down 0.3s ease-out',
            },
            keyframes: {
                'fade-in': {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                'slide-up': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-down': {
                    from: { opacity: '0', transform: 'translateY(-10px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}

export default config
