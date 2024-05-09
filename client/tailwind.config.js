/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: [
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "sans-serif",
            ],
            serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
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
