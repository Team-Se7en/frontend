import { Box, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";

import Footer from "../../../components/footer/footer/footer";
import { ProfessorCardViewShortInfo } from "../../../models/CardInfo";
import ProfessorHeader from "../../../components/home_header/ProfessorHeader";
import { ProfessorHomePage1 } from "../../../assets/images";
import ProfessorPositionFilter from "../../../components/ProfessorPositionFilter/ProfessorPositionFilter";
import ProfessorPositionSort from "../../../components/ProfessorPositionSort/ProfessorPositionSort";
import { ProfessorPositions } from "../../../components/professor-positions/ProfessorPositions";
import Search from "../../../components/Search_professor/Search";

export function ProfessorHomePage() {
  const [filterOptions, setFilterOptions] = useState({
    term: "",
    feeMax: 9999999999,
    feeMin: 0,
    year: "",
  });
  const [sortOptions, setSortOptions] = useState("");
  const [cards, setCards] = useState({});

  useEffect(() => {
    console.log(filterOptions);
    setCards({
      ...cards,
      term: filterOptions.term[0],
      feeMax: filterOptions.feeMax,
      feeMin: filterOptions.feeMin,
      year: filterOptions.year[0],
    });
  }, [sortOptions, filterOptions]);

  const [modelToAdd, setModelToAdd] = useState<ProfessorCardViewShortInfo>();

  const handleProfessorPositionAddition = (
    model: ProfessorCardViewShortInfo
  ) => {
    setModelToAdd(model);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundImage: `url(${ProfessorHomePage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <CssBaseline />

      <Box>
        <ProfessorHeader
          handleProfessorPositionAddition={handleProfessorPositionAddition}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: "100px",
            marginBottom: "20px",
            marginLeft: "450px",
          }}
        >
          <Search />
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "1px",
            gap: "30px",
            paddingRight: "100px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "1px",
              marginBottom: "auto",
              paddingRight: "100px",
            }}
          >
            <ProfessorPositionSort onSortChange={setSortOptions} />
            <ProfessorPositionFilter onProfessorFilter={setFilterOptions} />
          </Box>

          <ProfessorPositions modelToAdd={modelToAdd} queryParams={cards} />
        </Box>
      </Box>

      <Box sx={{ paddingTop: "128px" }}>
        <Footer />
      </Box>
    </Box>
  );
}
