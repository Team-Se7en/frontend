import "../../assets/fonts/CalligraphyFLF.css";
import "../../assets/fonts/GreatVibes-Regular.css";

import { Box, Grow, Link, Slide, Tooltip, Typography } from "@mui/material";
import { StyledDetailContainer, StyledGlobe, StyledIntro, StyledJoinUsText, StyledProfessorIcon, StyledSiteName, StyledSlogan, StyledStudentIcon, StyledSuprisedStudent } from "./Home-styles";
import { useEffect, useState } from "react";

import Footer from "../../components/footer/footer/footer";
import { LineChart } from "@mui/x-charts";
import Navbar from "../../components/navbar/navbar/navbar";
import  Search from "../../components/Search/Search";
import { Spacer } from "../../components/ui/Spacer";
import Styles from "../../Styles";
import clsx from "clsx";
import theme from "../../Theme";

export function Home() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(400 / 100);

    const timer = setInterval(() => {
      start += increment;
      if (start >= 400) {
        setCount(400);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 1);

    return () => clearInterval(timer);
  }, []);

  const globalClasses = Styles();

  return (
    <>
      <Navbar showAuthButtons={true} />
      <Box sx={{height:'100px'}}></Box>
      <Search />
      <StyledIntro>
        
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...({ timeout: 1000 })}
        >
          <Box>
            <StyledSiteName variant="h3">
              SevenApply
            </StyledSiteName>
          </Box>
        </Grow>

        <StyledGlobe />

        <Link href="/signup">
          <StyledJoinUsText fontFamily="CalligraphyFLF" variant="h4">
            Join Us Now!
          </StyledJoinUsText>
        </Link>


        <StyledDetailContainer>

          <Box className={clsx(globalClasses.flexColumn, globalClasses.fullyCenter)} gap={2} width={'60%'} minWidth={'300px'}>
            <LineChart height={250} grid={{ horizontal: true }} series={[
              { curve: "linear", data: [0, 20, 2, 6, 3, 9.3], color: theme.palette.chartColor, showMark: false },
            ]} leftAxis={null} bottomAxis={null} sx={{ backgroundColor: '#0E1C36', borderRadius: theme.shape.borderRadius }} />
            <Box className={clsx(globalClasses.flexRow, globalClasses.justifyContentBetween)} gap={'8px'}>
              <StyledSuprisedStudent />
              <Slide direction="up" mountOnEnter unmountOnExit in={true} {...({ timeout: 400 })}>
                <Typography variant="h6">
                  Site's Growth Over Time
                </Typography>
              </Slide>
              <StyledSuprisedStudent />
            </Box>
          </Box>

          <Box className={clsx(globalClasses.flexColumn)}>
            {/* <Collapse mountOnEnter unmountOnExit in={true} orientation="horizontal" style={{ transitionDelay: '400ms' }}> */}
            <StyledSlogan variant="h5" textAlign={'center'}>
              Apply to The Seven Continets With Us!
            </StyledSlogan>
            {/* </Collapse> */}
            <Spacer />
            <Box className={clsx(globalClasses.flexRow, globalClasses.justifyContentBetween)} marginBlockEnd={6} marginInlineStart={3} marginInlineEnd={3}>

              <Tooltip title="site's professors">
                <Box className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)} width={'45%'}>
                  <StyledProfessorIcon />
                  <Slide direction="right" mountOnEnter unmountOnExit in={true} {...({ timeout: 400 })}>
                    <Typography variant="h6">
                      {count}
                    </Typography>
                  </Slide>
                </Box>
              </Tooltip>

              <Tooltip title="site's students">
                <Box className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)} width={'45%'}>
                  <StyledStudentIcon />
                  <Slide direction="left" mountOnEnter unmountOnExit in={true} {...({ timeout: 400 })}>
                    <Typography variant="h6">
                      {count}
                    </Typography>
                  </Slide>
                </Box>
              </Tooltip>
            </Box>
          </Box>


        </StyledDetailContainer>

      </StyledIntro >
      <Footer />
    </>
  )
}
