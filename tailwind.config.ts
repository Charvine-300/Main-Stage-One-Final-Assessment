export default {
    theme: {
        extend: {
          colors: {
            white: {
              100: "rgba(255, 255, 255, 1)",
            },
            gray: {
              100: "rgba(232, 232, 234, 1)",
              200: "rgba(151, 152, 159, 1)",
                            300: "rgba(59, 60, 74, 1)"
            },
            black: {
              100: "rgba(24, 26, 42, 1)",
            },
            blue: {
              100: "rgba(75, 107, 251, 0.05)",
              200: "rgba(75, 107, 251, 1)",
            }
          },
            boxShadow: {
              'custom': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
            animation: {
              'spin-fast': 'spin 2s linear infinite', // Spins fast (adjust the time to make it faster or slower)
            },
          },
    },
    plugins: [],
  
  }
  