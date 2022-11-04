module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "nav-modal": `url('/nav-modal.svg')`,
                "lg-nav-modal": `url('/lg-nav.svg')`,
            },
        },
    },
    plugins: [],
};
