/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
      "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          gold: {
            DEFAULT: "hsl(var(--gold))",
            foreground: "hsl(var(--gold-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"),
      // function({ addComponents }) {
      //   addComponents({
      //     '.glassmorphism': {
      //       backgroundColor: 'rgba(255, 255, 255, 0.1)',
      //       backdropFilter: 'blur(8px)',
      //       border: '1px solid rgba(255, 255, 255, 0.2)',
      //       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      //     },
      //     '.glassmorphism-dark': {
      //       backgroundColor: 'rgba(0, 0, 0, 0.3)',
      //       backdropFilter: 'blur(8px)',
      //       border: '1px solid rgba(255, 255, 255, 0.1)',
      //       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      //     },
      //     '.glassmorphism-card': {
      //       backgroundColor: 'rgba(255, 255, 255, 0.1)',
      //       backdropFilter: 'blur(8px)',
      //       border: '1px solid rgba(255, 255, 255, 0.2)',
      //       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      //       borderRadius: '0.75rem',
      //       padding: '1.5rem',
      //       transition: 'all 0.3s',
      //       '&:hover': {
      //         boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      //       },
      //       '.dark &': {
      //         backgroundColor: 'rgba(0, 0, 0, 0.3)',
      //         border: '1px solid rgba(255, 255, 255, 0.1)'
      //       }
      //     },
      //     '.glassmorphism-button': {
      //       backgroundColor: 'rgba(var(--primary-rgb), 0.8)',
      //       backdropFilter: 'blur(4px)',
      //       boxShadow: '0 0 15px rgba(var(--primary-rgb), 0.5)',
      //       transition: 'all 0.3s',
      //       '&:hover': {
      //         backgroundColor: 'rgba(var(--primary-rgb), 0.9)'
      //       }
      //     },
      //     '.glassmorphism-button-outline': {
      //       border: '1px solid rgba(var(--primary-rgb), 0.3)',
      //       backdropFilter: 'blur(4px)',
      //       transition: 'all 0.3s',
      //       '&:hover': {
      //         border: '1px solid rgba(var(--primary-rgb), 0.5)',
      //         backgroundColor: 'rgba(var(--primary-rgb), 0.1)'
      //       }
      //     }
      //   })
      // }
    ],
  }