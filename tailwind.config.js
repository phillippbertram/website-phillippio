// const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
        dark: {
          400: '#1E3851',
          500: '#102D44',
          DEFAULT: '#102D44',
          600: '#0D2438',
          700: '#0a1b29',
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
