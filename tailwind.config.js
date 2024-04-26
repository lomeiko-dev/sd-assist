/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,vue,ts}",
    "./src/shared/layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
		colors: {
			'primary': '#1C426D',
			'smoky-white': '#F2F8FF',
      'gray': '#8C9091'
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
};
