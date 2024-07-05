import React from "react";
import client from "../../Http/axios";
import { University } from "../../models/University";
import { Box } from "@mui/material";

const onNavClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function AllUnisPage() {
  const [allUnis, setAllUnis] = React.useState<University[]>();

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

  return <Box>All Unis page works</Box>;
}
