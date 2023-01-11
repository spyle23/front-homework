import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StylesProvider } from "@mui/styles";
import { theme } from "./theme";
import { MainRouter } from "./router/MainRouter";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <MainRouter />
        </StylesProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
