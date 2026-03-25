/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,njk,md}"],
    theme: {
        extend: {
            colors: {
                // Placeholder colors, will be refined in the design phase
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
            },
            fontFamily: {
                heading: ['var(--font-heading)', 'serif'],
                body: ['var(--font-body)', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
