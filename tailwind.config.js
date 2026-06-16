/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    borderRadius: {
      none: '0px',
      DEFAULT: '0px',
      full: '9999px',
    },
    extend: {
      colors: {
        primary: '#000000',
        'primary-container': '#1d1b18',
        'on-primary': '#ffffff',
        'on-primary-container': '#87837f',
        secondary: '#635d58',
        'secondary-container': '#eae1da',
        'on-secondary': '#ffffff',
        background: '#fdf8f7',
        'on-background': '#1c1b1b',
        surface: '#fdf8f7',
        'surface-container-low': '#f7f3f1',
        'surface-container': '#f1edec',
        'surface-variant': '#e6e2e0',
        'on-surface': '#1c1b1b',
        'on-surface-variant': '#4b463f',
        outline: '#7c766e',
        'outline-variant': '#cdc5bc',
        ember: '#FF8C00',
      },
      fontFamily: {
        serif: ['"IBM Plex Serif"', 'Georgia', 'serif'],
        sans: ['"Fira Sans"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        xs: '4px',
        sm: '12px',
        md: '24px',
        lg: '48px',
        xl: '80px',
        margin: '32px',
      },
      fontSize: {
        'display': ['clamp(2rem, 5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'headline-lg': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'headline-md': ['1.5rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.5' }],
        'label': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      boxShadow: {
        'hard-sm': '4px 4px 0px #000000',
        'hard-md': '6px 6px 0px #000000',
        'hard-none': '0px 0px 0px #000000',
      },
    },
  },
  plugins: [],
}
