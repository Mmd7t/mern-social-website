// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: { main: "#424ae3" },
            secondary: { main: "#db7530" },
            neutral: { main: "#C2C2C2" },
            background: { default: "#0A0A0A" },
          }
        : {
            primary: { main: "#3b43e3" },
            secondary: { main: "#db7530" },
            neutral: { main: "#666666" },
            background: { default: "#F6F6F6" },
          }),
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#121212" : "#FFF",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: mode === "dark" ? "0 0 0 0" : "0 1px 6px 1px #ededed",
            borderRadius: "10px",
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#FFFFFF",
            "&:hover": {
              color: "#424ae3",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            marginBottom: 10,
          },
        },
      },
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
