/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "primary": {
        "100": "#dcd4fc",
        "200": "#b9a9f9",
        "300": "#967ef6",
        "400": "#7353f3",
        "500": "#5129f0",
        "600": "#4020c0",
        "700": "#301890",
        "800": "#20105f",
        "900": "#10082f"
        },
        "secondary": {
          "100": "#f5ffd2",
          "200": "#ecffa5",
          "300": "#e2ff78",
          "400": "#d9ff4b",
          "500": "#d0ff1f",
          "600": "#a6cc18",
          "700": "#7c9912",
          "800": "#53650c",
          "900": "#293206"
        },
        "grey": {
          "100": "#6f6f72",
          "200": "#57575b",
          "300": "#3f3f44",
          "400": "#1a1a1e",
          "500": "#101016",
          "600": "#0e0e14",
          "700": "#0d0d12",
          "800": "#0b0b0f",
          "900": "#0a0a0d"
        },
        "success": {
          "100": "#d5f9d2",
          "200": "#abf3a5",
          "300": "#81ed78",
          "400": "#57e74b",
          "500": "#2ee21e",
          "600": "#24b418",
          "700": "#1b8712",
          "800": "#125a0b",
          "900": "#092d05"
        },
        "error": {
          "100": "#fbd0d6",
          "200": "#f7a2ad",
          "300": "#f37484",
          "400": "#ef465b",
          "500": "#eb1832",
          "700": "#8d0e1e",
          "800": "#5d0913",
          "900": "#2e0409"
        },
        "warning": {
          "100": "#fbeed5",
          "200": "#f7ddab",
          "300": "#f3cc81",
          "400": "#efbb57",
          "500": "#ecab2e",
          "600": "#bc8824",
          "700": "#8d661b",
          "800": "#5e4412",
          "900": "#2f2209"
        },
        "social": {
          "twitch": "#A970FF",
          "kick": "#53FC18"
        }
      },
      "fontFamily": {
        "sans": "Satoshi",
      },
      "fontSize": {
        "xs": "0.625rem",
        "sm": "0.75rem",
        "base": "0.875rem",
        "lg": "1rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem"
      },
      "boxShadow": {
        "outline": "0 0 8px 0 rgba(81, 41, 240, 0.4)",
      },
      "keyframes": {
        slideDown: {
          from: { height: 0, marginTop: 0 },
          to: { height: 'var(--radix-accordion-content-height)', marginTop: '12px' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)', marginTop: '12px' },
          to: { height: 0, marginTop: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 600ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 600ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
}