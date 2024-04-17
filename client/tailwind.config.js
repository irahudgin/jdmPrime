/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            bebasNeue: ['"Bebas Neue"', "sans-serif"],
        },

        extend: {
            fontSize: {
                xxs: "0.4rem",
            },
        },
    },
    plugins: [],
};
