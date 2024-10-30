/** @type {import('tailwindcss').Config} */
export default {
  // Specify the paths to all of the template files in your project
  content: [
    "./index.html", // Ensure this file exists
    "./src/**/*.{js,ts,jsx,tsx}", // Watch all JS, TS, JSX, and TSX files in the src directory
  ],
  theme: {
    extend: {
      // Custom screens for responsive design
      screens: {
        'tablet': { 'max': '1024px' },
        'lg': '1280px',
      },
      // Custom font families
      fontFamily: {
        Maven: ["Maven Pro", "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      // Custom animations
      animation: {
        progress: "progress 7s linear",
        marquee: 'marquee 40s linear infinite',
      },
      // Keyframes for custom animations
      keyframes: {
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
    },
    // Variants extend for additional states (if needed)
    variants: {
      extend: {
        animation: ['hover', 'focus'], // Enable animation on hover and focus
      },
    },
  },
  plugins: [],
};
