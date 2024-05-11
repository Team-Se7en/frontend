import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Forgot } from "./pages/forgot-pass/Forgotpassword/ForgotPassword";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import Newpassword from "./pages/forgot-pass/Newpassword/Newpassword";
import { ProfessorEditProfile } from "./pages/editProfile/ProfessorEditProfile";
import { ProfessorHomePage } from "./pages/home/Professor/ProfessorHomePage";
import { ProfessorSignup } from "./pages/signup/professor-signup/ProfessorSignup";
import Signup from "./pages/signup/Signup";
import { SignupVerification } from "./pages/signup/SignupVerification";
import { StudentEditProfile } from "./pages/editProfile/StudentEditProfile";
import StudentHomepage from "./pages/home/Student/StudentHomepage";
import { StudentSignup } from "./pages/signup/student-signup/StudentSignup";
import { Verification } from "./pages/forgot-pass/AccountVerification/Verification";
import UniversityPage from "./pages/university/University";

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
        <Route
          path="professor/editProfile"
          element={<ProfessorEditProfile />}
        />
        <Route path="student/editProfile" element={<StudentEditProfile />} />
        <Route path="forgot-pass" element={<Forgot />} />
        <Route path="verification" element={<Verification />} />
        <Route
          path="password/reset/confirm/:uid/:token"
          element={<Newpassword />}
        />
        <Route path="activate/:uid/:token" element={<SignupVerification />} />

        <Route path="" element={<Home />} />
        <Route path="newpassword" element={<Newpassword />} />
        <Route path="professorhomepage" element={<ProfessorHomePage />} />
        <Route path="studenthomepage" element={<StudentHomepage />} />
        <Route path="universitypage" element={<UniversityPage />} />
      </Routes>
    </BrowserRouter>
  );
}
