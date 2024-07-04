import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUs from "./pages/aboutus/AboutUs";
import { EditCV } from "./pages/editProfile/CV/EditCV";
import { Forgot } from "./pages/forgot-pass/Forgotpassword/ForgotPassword";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import Newpassword from "./pages/forgot-pass/Newpassword/Newpassword";
import NotificationsPage from "./pages/notifications/notifications-page";
import { ProfessorEditProfile } from "./pages/editProfile/ProfessorEditProfile";
import { ProfessorHomePage } from "./pages/home/Professor/ProfessorHomePage";
import { ProfessorSignup } from "./pages/signup/professor-signup/ProfessorSignup";
import Signup from "./pages/signup/Signup";
import { SignupVerification } from "./pages/signup/SignupVerification";
import { StudentAccept } from "./pages/accept-sudent/StudentAccept";
import { StudentEditProfile } from "./pages/editProfile/StudentEditProfile";
import StudentHomepage from "./pages/home/Student/StudentHomepage";
import { StudentSignup } from "./pages/signup/student-signup/StudentSignup";
import UniversityPage from "./pages/university/University";
import { Verification } from "./pages/forgot-pass/AccountVerification/Verification";
import { ViewCV } from "./pages/editProfile/CV/ViewCV";
import StudentChatPage from "./pages/chatpage-student/chatpage-student";
import ChatPage from "./pages/chat-page/ChatPage";
import React from "react";
import axios from "axios";
import { University } from "./models/University";

export default function Routing() {
  const [allUnis, setAllUnis] = React.useState<University[]>();

  React.useEffect(() => {
    axios
      .get("https://seven-apply.liara.run/eduportal/universities/")
      .then((response) => {
        setAllUnis(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

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
        <Route path="cv/view" element={<ViewCV />} />
        <Route path="cv/edit" element={<EditCV />} />
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
        <Route path="studentaccept" element={<StudentAccept />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="studentchatpage" element={<StudentChatPage />} />
        <Route path="chatpage" element={<ChatPage />} />
        <Route path="aboutus" element={<AboutUs />} />

        {allUnis ? (
          allUnis.map((uni, index) => (
            <Route
              key={index}
              path={"universitypage/" + uni.id}
              element={<UniversityPage />}
            />
          ))
        ) : (
          <></>
        )}
      </Routes>
    </BrowserRouter>
  );
}
