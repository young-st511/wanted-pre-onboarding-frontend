import { ThemeProvider } from "styled-components";
import mainTheme from "./themes/mainTheme";
import GlobalStyle from "./themes/GlobalStyle";
import Router from "./Router";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
