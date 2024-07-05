import React from "react";
import client from "../../Http/axios";
import { University } from "../../models/University";
import { Box } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import Navbar from "../../components/navbar/navbar/navbar";
import ProfessorHeader from "../../components/home_header/ProfessorHeader";
import StudentHeader from "../../components/home_st_header/StudentHeader";
import { ProfessorCardViewShortInfo } from "../../models/CardInfo";

export default function AllUnisPage() {
  const [allUnis, setAllUnis] = React.useState<University[]>();
  const { user } = useAuth();
  const [modelToAdd, setModelToAdd] =
    React.useState<ProfessorCardViewShortInfo>();

  const handleProfessorPositionAddition = (
    model: ProfessorCardViewShortInfo
  ) => {
    setModelToAdd(model);
  };

  React.useEffect(() => {
    client
      .get("https://seven-apply.liara.run/eduportal/universities/")
      .then((response) => {
        setAllUnis(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <Box>
      {!user ? (
        <Navbar showAuthButtons={true} />
      ) : user?.professor ? (
        <ProfessorHeader
          handleProfessorPositionAddition={handleProfessorPositionAddition}
        ></ProfessorHeader>
      ) : (
        <StudentHeader />
      )}
    </Box>
  );
}
