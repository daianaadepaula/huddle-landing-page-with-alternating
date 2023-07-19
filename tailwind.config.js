/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
			colors: {
				'pink-primary': 'hsl(322, 100%, 66%)',
				'very-pale-cyan': 'hsl(193, 100%, 96%)',
				'very-dark-cyan': 'hsl(192, 100%, 9%)',
				'grayish-blue': 'hsl(208, 11%, 55%)',
			},
			fontFamily: {
				open: ['Open Sans', 'sans-serif'],
				poppins: ['Poppins', 'serif'],
			},
			backgroundImage: {
        'hero-desktop': "url('../images/bg-hero-desktop.svg')",
        'hero-mobile': "url('../images/bg-hero-mobile.svg')",
      },
		},
  },
  plugins: [],
}

