/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                // Set your custom font as the first priority
                serif: ['"Montserrat"', 'sans serif'],
                sans: ['"Montserrat"', 'sans serif'], 
            },
            colors: {
                // Keeping your Orange accent
                accent: {
                    500: '#f97316', 
                    600: '#ea580c',
                }
            }
        },
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
	darkMode: 'media',
}