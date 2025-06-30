// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        // add other folders as needed
    ],
    theme: {
        extend: {
            fontFamily: {
                spaceGrotesk: ['var(--font-space-grotesk)', 'sans-serif'],
                lexendDeca: ['var(--font-lexend-deca)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
