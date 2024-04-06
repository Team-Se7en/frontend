import { ThemeProvider } from "@emotion/react";
import Routing from "Routing";
import theme from "Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routing></Routing>
      </div>
    </ThemeProvider>
  );
}

export default App;
