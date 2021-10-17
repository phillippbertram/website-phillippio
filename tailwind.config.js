// const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
        dark: {
          300: '#1E3851',
          400: '#112d44',
          500: '#0d2436',
          DEFAULT: '#0d2436',
          600: '#0b1f30',
          700: '#081722',
        },
        light: {
          400: '#f8f9fc',
          500: '#F7F8FC',
          DEFAULT: '#F7F8FC',
          600: '#c6c6ca',
          700: '#949597',
        },
        primary: {
          400: '#d16b7f',
          500: '#CC5A71',
          DEFAULT: '#CC5A71',
          600: '#b85166',
          700: '#a3485a',
        },
			},
			container: {
        center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	variants: {
		extend: { opacity: ['disabled'] },
	},
	plugins: [require('@tailwindcss/forms')],
};
