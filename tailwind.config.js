/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
		screens:{
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
    extend: {
			colors: {
				'primary-color': 'hsl(322, 100%, 66%)',
				'neutral-light': 'hsl(193, 100%, 96%)',
				'neutral-medium': 'hsl(208, 11%, 55%)',
				'neutral-dark': 'hsl(192, 100%, 9%)',
			},
		},
  },
  plugins: [],
}

