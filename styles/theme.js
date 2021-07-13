import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DDE3E9",
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),
    h1: {
      fontWeight: 400,
      fontSize: 24,
      lineHeight: "29px",
      color: "#191847",
    },
  },
});

export default theme;
