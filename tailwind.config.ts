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
                    primary: '#0B0F14',
                    secondary: '#111827',
                },
                accent: {
                    cyan: '#22D3EE',
                    violet: '#8B5CF6',
                },
                status: {
                    success: '#10B981',
                    warning: '#F59E0B',
                },
                text: {
                    primary: '#E5E7EB',
                    muted: '#9CA3AF',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            boxShadow: {
                terminal: '0 0 20px rgba(34, 211, 238, 0.1)',
                'terminal-glow': '0 0 15px rgba(139, 92, 246, 0.2)',
            },
        },
    },
    plugins: [],
}

export default config
