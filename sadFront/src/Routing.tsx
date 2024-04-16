import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Login, ProfessorEditProfile, ProfessorSignup, Signup, StudentSignup } from "@pages";

import { Forgot } from "pages/forgot-pass/Forgotpassword";
import { Newpassword } from "pages/forgot-pass/Newpassword";
import {ProfessorHomePage} from "pages/home/Professor/ProfessorHomePage"
import { Verification } from "pages/forgot-pass/AccountVerification";

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
                <Route path="forgot-pass" element={<Forgot />} />
                <Route path="verification" element={<Verification />} />
                <Route path="newpassword" element={<Newpassword />} />
                <Route path="professorhomepage" element={<ProfessorHomePage />} />
            </Routes>
        </BrowserRouter>
    )
}