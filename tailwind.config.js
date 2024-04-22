/** @type {import('tailwindcss').Config} */
export default {
  content: [
		"./src/**/*.{js,vue,ts}",
		"./src/shared/layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue"
	],
  theme: {
    extend: {
		colors: {
			'primary': '#163C66',
		},
		screens: {
			mobile: "430px",
			tablet: "768px",
			sxga: '1024px',
			"mini-laptop": "1240px",
			laptop: "1440px",
		}
	},
  },
  plugins: [],
}

