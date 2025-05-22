/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}", // Jika pakai Pages Router
        "./components/**/*.{js,ts,jsx,tsx}", // Untuk komponen
        "./app/**/*.{js,ts,jsx,tsx}", // Jika juga pakai App Router
        "./src/**/*.{js,ts,jsx,tsx}", // Jika file disimpan dalam /src
    ],
    theme: {
        extend: {
            screens: {
                "max-xl": { max: "1279px" },
                "max-lg": { max: "1023px" },
                "max-md": { max: "767px" },
                "max-sm": { max: "638px" },
                "max-xs": { max: "500px" },
                "max-ws": { max: "400px" },
                "minmax-sm": { min: "501px", max: "638px" },
                "minmax-md": { min: "638px", max: "767px" },
                "minmax-lg": { min: "768px", max: "1023px" },
            },
        },
    },
    plugins: [],
};
