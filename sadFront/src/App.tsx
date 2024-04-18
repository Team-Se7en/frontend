import Routing from "Routing";
import { ThemeProvider } from "@emotion/react";
import theme from "Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Routing></Routing>
    </ThemeProvider>
  );
}

export default App;
