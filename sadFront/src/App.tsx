import { ThemeProvider } from "styled-components";
import Routing from "./Routing";
import theme from "./Theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
        <Routing></Routing>
    </ThemeProvider>
  );
}

export default App;
