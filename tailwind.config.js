module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        circle: "circle",
      },
      colors: {
        primary: {
          10: "#F4D7C3",
          50: "#F6AB78",
          100: "#F58232",
        },
        secondary: {
          5: "#edf4f8",
          10: "#CEE2EB",
          50: "#AED5E7",
          100: "#91C9E3",
        },
        tertiary: {
          50: "#FAEEE3",
          100: "#EB7700",
        },
        typo: "#58595B",
        cardTypo: "#0D1821",
        50: "#FAEEE3",
        100: "#EB7700",
        skyBlue: "#7BDFF2",
        cardTypo: "#0D1821",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
        faceBook: "#4267B2",
      },
      fontSize: {
        sectionHead: "16px",
        articleHead: "16px",
      },
      fontFamily: {
        title: ["Quicksand", "sans-serif"],
        general: ["Rubik", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      minHeight: {
        48: "192px",
      },
      height: {
        "screen-80": "80vh",
        "screen-90": "90vh",
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        DEFAULT: "4px",
        md: "0.375rem",
        lg: "0.5rem",
        half: "50%",
        xl: "0.75rem",
        "2xl": "1rem",
      },
      inset: {
        centerToast: "calc(50% - 8rem)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
