/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: ['components/**/*.tsx', 'layouts/**/*.tsx', 'pages/**/*.tsx'],
	},
};
