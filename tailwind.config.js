/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'backGround': 'var(--foreground)',
				'ijoMuda': 'var(--ijoMuda)',
			}
		},
	},
	plugins: [],
}