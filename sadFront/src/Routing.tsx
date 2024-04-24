import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Login,
  ProfessorEditProfile,
  ProfessorSignup,
  Signup,
  StudentSignup,
} from "@pages";

import { Forgot } from "pages/forgot-pass/Forgotpassword";
import Landing from "pages/home/Landing.page/Landing";
import { Newpassword } from "pages/forgot-pass/Newpassword";
import { ProfessorHomePage } from "pages/home/Professor/ProfessorHomePage";
import { SignupVerification } from "pages/signup/SignupVerification";
import { StudentEditProfile } from "pages/editProfile/StudentEditProfile";
import StudentHomepage from "pages/home/Student/StudentHomepage";
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
                {/* <Route path="signup/verification" element={<SignupVerfication />} /> */}
                <Route path="professor/editProfile" element={<ProfessorEditProfile />} />
                <Route path="student/editProfile" element={<StudentEditProfile />} />
                <Route path="forgot-pass" element={<Forgot />} />
                <Route path="verification" element={<Verification />} />
                <Route path="password/reset/confirm/:uid/:token" element={<Newpassword />} />
                <Route path="activate/:uid/:token" element={<SignupVerification/>} />

                <Route path="home" element={<Landing />} />
                <Route path="newpassword" element={<Newpassword />} />
                <Route path="professorhomepage" element={<ProfessorHomePage />} />
              <Route path="studenthomepage" element={<StudentHomepage />} />
            </Routes>
        </BrowserRouter>
    )
}
