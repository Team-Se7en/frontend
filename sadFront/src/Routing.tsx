import { Signup, StudentSignup, ProfessorSignup, Home, Login , ProfessorEditProfile} from "@pages";
import { Verification } from "pages/forgot-pass/AccountVerification";
import { Forgot } from "pages/forgot-pass/Forgotpassword";
import { Newpassword } from "pages/forgot-pass/Newpassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "pages/home/Landing.page/Landing";
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
                <Route path="password/reset/confirm/:uid/:token" element={<Newpassword />} />
                <Route path="home" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    )
}