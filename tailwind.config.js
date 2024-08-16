/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Paths to files where Tailwind CSS classes are used
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "profile-red": "#FB2621", // Custom color for profile-red.
      },
      screens: {
        xs: "380px",
      },
    },
  },
  plugins: [],
};
