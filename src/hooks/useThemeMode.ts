// @ts-nocheck
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo } from "react";
export const useThemeMode = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: [
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Ubuntu",
            "Helvetica Neue",
            "sans-serif",
          ],
        },
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "rgb(29, 161, 242)",
            dark: "rgb(26, 145, 218)",
            contrastText: "#fff",
          },
          secondary: {
            main: "rgb(26, 145, 218)",
            dark: "rgb(15, 20, 25)",
          },
          error: {
            main: red.A400,
          },
          info: {
            main: "rgb(29, 155, 240)",
          },
          background: {
            default: prefersDarkMode ? "#14171a" : "#fff",
          },
          text: {
            primary: prefersDarkMode ? "#fff" : "#14171a",
            secondary: "rgb(83, 100, 113)",
          },
          action: {
            disabledBackground: "rgb(153 216 255)",
            disabled: "#fff",
          },
        },
        shadows: Array(25).fill("none") as Shadows,
        components: {
          MuiButton: {
            styleOverrides: {
              root: ({ ownerState, theme }) => ({
                ...(ownerState.variant === "outlined" &&
                  ownerState.name === "apple" && {
                    backgroundColor: "#fff",
                    color: prefersDarkMode ? "#fff" : "#14171a",
                    "&:hover": {
                      color: prefersDarkMode ? "#fff" : "#14171a",
                      backgroundColor: prefersDarkMode
                        ? "#14171a"
                        : "rgb(230,230,230)",
                      borderColor: "rgb(207, 217, 222)",
                    },
                  }),
                borderRadius: 30,
                textTransform: "none",
                fontSize: 15,
                height: 40,
                fontWeight: 700,
                lineHeight: "20px",
                color: "#14171a",
                ...(ownerState.name === "google" && {
                  color: prefersDarkMode ? "#fff" : "#14171a",
                }),
                ...(ownerState.variant === "contained" && {
                  color: "#fff",
                }),
                ...(ownerState.variant === "outlined" &&
                  ownerState.name === "signIn" && {
                    color: theme.palette.primary.main,
                    backgroundColor: prefersDarkMode ? "#14171a" : "#fff",
                    "&:hover": {
                      backgroundColor: prefersDarkMode
                        ? "#fff"
                        : "rgba(29, 155, 240,0.1)",
                      borderColor: "rgb(207, 217, 222)",
                    },
                  }),
              }),
              textPrimary: {
                paddingLeft: 20,
                paddingRight: 20,
              },
              outlinedPrimary: {
                borderColor: "rgb(207, 217, 222)",
              },
            },
          },
          MuiFilledInput: {
            styleOverrides: {
              // underline: {
              //   "&:after": {
              //     borderBottomWidth: "2px",
              //   },
              //   "&:before": {
              //     borderColor: "#000",
              //     borderBottomWidth: "2px",
              //   },
              // },
              // input: {
              //   backgroundColor: "rgb(245, 248, 250)",
              // },
            },
          },
          MuiDialog: {
            styleOverrides: {
              paper: {
                borderRadius: 16,
                padding: "0px 32px 48px 32px",
              },
            },
          },
          MuiDialogActions: {
            styleOverrides: {
              // root: {
              //   marginBottom: 8,
              // }
            },
          },
          MuiDialogTitle: {
            styleOverrides: {
              // root: {
              //   borderBottom: "1px solid rgb(204, 214, 221)",
              //   marginBottom: 10,
              //   padding: "10px 15px",
              //   "& h2": {
              //     display: "flex",
              //     alignItems: "center",
              //     fontWeight: 800,
              //   },
              //   "& button": {
              //     padding: 8,
              //     marginRight: 20,
              //   },
              // },
            },
          },
        },
      }),
    []
  );
  return [theme, prefersDarkMode] as [Theme, boolean];
};
