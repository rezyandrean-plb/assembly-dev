import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        naturalPalette: {
          DEFAULT: "var(--naturalPalette)",
          foreground: "var(--naturalPalette-foreground)",
          naturalPalette1: "var(--naturalPalette-naturalPalette1)",
        },
        greyFriends: {
          DEFAULT: "var(--greyFriends)",
          foreground: "var(--greyFriends-foreground)",
          matchingPalette1: "var(--greyFriends-matchingPalette1)",
        },
        dottingPalette: {
          DEFAULT: "var(--dottingPalette)",
          dottingPalette2: "var(--dottingPalette-dottingPalette2)",
          dottingPalette1: "var(--dottingPalette-dottingPalette1)",
          dottingPalette3: "var(--dottingPalette-dottingPalette3)",
        },
        neighbourPalette: {
          DEFAULT: "var(--neighbourPalette)",
          foreground: "var(--neighbourPalette-foreground)",
          neighbourPalette1: "var(--neighbourPalette-neighbourPalette1)",
          neighbourPalette2: "var(--neighbourPalette-neighbourPalette2)",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        discreetPalette: {
          DEFAULT: "var(--discreetPalette)",
          discreetPalette1: "var(--discreetPalette-discreetPalette1)",
          discreetPalette2: "var(--discreetPalette-discreetPalette2)",
          discreetPalette3: "var(--discreetPalette-discreetPalette3)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out forwards",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "fade-in-down": "fadeInDown 1s ease-out forwards",
        "fade-in-left": "fadeInLeft 1s ease-out forwards",
        "fade-in-right": "fadeInRight 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
