import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#cdacff",
        secondary: "#000",
      },

      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },

      animation: {
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        slideUp: "slideUp 0.3s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
