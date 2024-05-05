import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfessorEditProfile } from "./pages/editProfile/ProfessorEditProfile";
import { StudentEditProfile } from "./pages/editProfile/StudentEditProfile";
import { Verification } from "./pages/forgot-pass/AccountVerification/Verification";
import { Forgot } from "./pages/forgot-pass/Forgotpassword/ForgotPassword";
import Newpassword from "./pages/forgot-pass/Newpassword/Newpassword";
import { ProfessorHomePage } from "./pages/home/Professor/ProfessorHomePage";
import StudentHomepage from "./pages/home/Student/StudentHomepage";
import { ProfessorSignup } from "./pages/signup/professor-signup/ProfessorSignup";
import Signup from "./pages/signup/Signup";
import { SignupVerification } from "./pages/signup/SignupVerification";
import { StudentSignup } from "./pages/signup/student-signup/StudentSignup";
import { Login } from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import { ViewCV } from "./pages/editProfile/CV/ViewCV";
import { EditCV } from "./pages/editProfile/CV/EditCV";



export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="" element={<Home />} /> */}
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="signup/student" element={<StudentSignup />} />
                <Route path="signup/professor" element={<ProfessorSignup />} />
                {/* <Route path="signup/verification" element={<SignupVerfication />} /> */}
                <Route path="professor/editProfile" element={<ProfessorEditProfile />} />
                <Route path="student/editProfile" element={<StudentEditProfile />} />
                <Route path="cv/view" element={<ViewCV />} />
                <Route path="cv/edit" element={<EditCV/>} />
                <Route path="forgot-pass" element={<Forgot />} />
                <Route path="verification" element={<Verification />} />
                <Route path="password/reset/confirm/:uid/:token" element={<Newpassword />} />
                <Route path="activate/:uid/:token" element={<SignupVerification />} />

                <Route path="" element={<Home />} />
                <Route path="newpassword" element={<Newpassword />} />
                <Route path="professorhomepage" element={<ProfessorHomePage />} />
                <Route path="studenthomepage" element={<StudentHomepage />} />
            </Routes>
        </BrowserRouter>
    )
}
