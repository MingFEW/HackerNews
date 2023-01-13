module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    extend: {
      colors: {
        background: 'var(--color-background)',
        card: 'rgba(var(--color-card), <alpha-value>)',
        darkGunmetal: 'var(--color-dark-gunmetal)',
        border: 'var(--color-border)',
        textSecondary: 'var(--color-text-secondary)',
        textGrey: 'var(--color-text-grey)',
        darkJungleGreen: 'var(--color-dark-jungle-green)'
      }
    }
  },
  plugins: []
}
