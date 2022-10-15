/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				DMSans: ["DMSans"],
			},
			backgroundImage: (theme) => ({
				pageGradient:
					"linear-gradient(180deg, #222222 0%, #1F1F1F 11.64%, #171717 25.66%, #161616 32.94%, #151515 35.98%, #131313 44.89%, #121212 55.22%, #121212 75.34%, #121212 85.45%, rgba(18, 18, 18, 0) 100%);",
			}),
		},
	},
	plugins: [],
};
