import { ThemeProvider } from "styled-components";
import Routing from "./Routing";
import theme from "./Theme";
import { AuthProvider } from "./hooks/AuthProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routing></Routing>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
