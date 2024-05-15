import { ThemeProvider } from "styled-components";
import Routing from "./Routing";
import theme from "./Theme";

Date.prototype.toString = function(): string {
  const month = (this.getMonth() + 1).toString().padStart(2, '0');
  const date = this.getDate().toString().padStart(2, '0');
  const year = this.getFullYear().toString();

  return `${year}-${month}-${date}`;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routing></Routing>
    </ThemeProvider>
  );
}

export default App;
