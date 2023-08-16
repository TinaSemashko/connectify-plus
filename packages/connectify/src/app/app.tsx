import Topbar from "../shared/topbar/topbar";
import { AppRoutes } from "./appRoutes";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import Footer from "../shared/footer/footer";

declare module "@mui/material/styles" {
  interface Palette {
    secondGreen: Palette["primary"];
    lightGreen: Palette["primary"];
    colorWhite: Palette["primary"];
    colorShadow: Palette["primary"];
  }

  interface PaletteOptions {
    secondGreen?: PaletteOptions["primary"];
    lightGreen?: PaletteOptions["primary"];
    colorWhite?: PaletteOptions["primary"];
    colorShadow?: PaletteOptions["primary"];
  }
}

export let theme = createTheme({
  palette: {
    primary: {
      main: "#216249ff",
    },
    secondary: {
      main: "#daca3bff",
    },
    secondGreen: {
      main: "#1D5A43",
    },
    lightGreen: {
      main: "#20835D",
    },
    colorWhite: {
      main: "#ffffff",
    },
    colorShadow: {
      main: "#000000",
    },
  },
  typography: {
    h1: {
      fontFamily: "Chicle, cursive",
      fontSize: "15rem",
    },
    h2: {
      fontFamily: "Gravitas One, cursive",
      fontSize: "8rem",
    },
    h3: {
      fontFamily: "Chicle, cursive",
    },
    h4: {
      fontFamily: "Gravitas One, cursive",
    },
    h5: {
      fontFamily: "Gravitas One, cursive",
      fontSize: "4rem",
    },
    body1: {
      fontFamily: "Inter, sans-serif",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 568, md: 760, lg: 960, xl: 1200 },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <Topbar />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
