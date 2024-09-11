const { default: flattenColorPalette } =
	require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				lightBlack: { custom: "#181818" },
				pink: {
					custom: "#f6c5b7",
				},
			},
		},
	},
	darkMode: "class",
	plugins: [addVariablesForColors],
};

// Function to flatten the colors into CSS variables
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
	);

	addBase({
		":root": newVars,
	});
}
