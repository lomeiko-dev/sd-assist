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
    extend: {},
  },
  plugins: [],
}

