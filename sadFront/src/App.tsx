import { Home, Login, ProfessorSignup, Signup, StudentSignup } from "@pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signup/student" element={<StudentSignup />} />
        <Route path="signup/professor" element={<ProfessorSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
