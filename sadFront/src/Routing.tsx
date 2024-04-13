import { Signup, StudentSignup, ProfessorSignup, Home, Login , ProfessorEditProfile} from "@pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="signup/student" element={<StudentSignup />} />
                <Route path="signup/professor" element={<ProfessorSignup />} />
                <Route path="professor/editProfile" element={<ProfessorEditProfile />} />
            </Routes>
        </BrowserRouter>
    )
}