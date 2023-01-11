import { createTheme } from "@mui/material";
import { COLOR } from "../utils/color";

export const theme = createTheme({
  palette: {
    primary: {
      light: COLOR.PRIMARY,
      main: COLOR.PRIMARY,
      dark: COLOR.PRIMARY,
      contrastText: "#fff",
    },
    secondary: {
      light: COLOR.LIGHTBLUE,
      main: COLOR.LIGHTBLUE,
      dark: COLOR.LIGHTBLUE,
      contrastText: "#ffff",
    },
  },
  typography: {
    h1: {
      fontSize: 40,
      lineHeight: 0.8,
      color: COLOR.PRIMARY,
    },
    h2: {
      fontSize: 35,
      fontWeight: "bold",
      color: COLOR.PRIMARY,
    },
    h3: {
      fontWeight: 400,
      fontSize: 28,
      color: COLOR.PRIMARY,
    },
    h4: {
      fontSize: 26,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: "bold",
    },
    body1: {},
    body2: {},
    subtitle1: {
      fontWeight: "bold",
    },
    subtitle2: {
      //   color: COLOR.DARK_GREY,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Sophia Pro", sans-serif',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation3: {
          boxShadow: "0 6px 18px 0 #ccc",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: 8,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&:not(.Mui-focused, [data-shrink='true'])": {
            top: -6,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            padding: 0,
            "& .MuiAutocomplete-input": {
              padding: 10,
            },
          },
        },
        input: {
          padding: 10,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
  },
});
