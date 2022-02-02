const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "serif", ...defaultTheme.fontFamily.sans],
				poppins: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
			},
		},
		plugins: [],
	},
};
