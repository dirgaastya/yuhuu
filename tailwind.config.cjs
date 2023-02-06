/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                birthday: ["Birthday Wishlist"],
                birthdayWish: ["Wishlist"],
                avenir: ["Avenir"],
            },
        },
    },
    plugins: [],
};
