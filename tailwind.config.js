// const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
        dark: {
          light: '#1E3851',
          DEFAULT: '#102D44',
          darker: '#0D2438',
        },
        light: {
          lighter: '#FFFFFF',
          DEFAULT: '#F7F8FC',
          dark: '#f6f7f8',
        },
        primary: {
          light: '#d16b7f',
          DEFAULT: '#CC5A71',
          dark: '#b85166',
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
