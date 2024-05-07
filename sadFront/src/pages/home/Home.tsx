import { LineChart } from "@mui/x-charts";
import { HomeStyles, StyledDetailContainer, StyledGlobe, StyledIntro, StyledJoinUsText, StyledProfessorIcon, StyledSiteName, StyledSlogan, StyledStudentIcon, StyledSuprisedStudent, StyledTopEntities, TopProfessorsSideImage, TopStudentsSideImage, TopUniversitiesSideImage } from "./Home-styles";
import { Box, Card, Fade, Grow, Link, Slide, Slider, Tooltip, Typography } from "@mui/material";
import theme from "../../Theme";
import Styles from "../../Styles";
import clsx from "clsx";
import { Spacer } from "../../components/ui/Spacer";
import { useState, useEffect } from "react";
import "../../assets/fonts/CalligraphyFLF.css";
import "../../assets/fonts/GreatVibes-Regular.css";
import Navbar from "../../components/navbar/navbar/navbar";
import Footer from "../../components/footer/footer/footer";
import Search from "../../components/Search/Search";
import { LandingInfo } from "../../models/LandingInfo";
import { getLandingInfo } from "../../services/landing.service";
import { Loading } from "../../components/ui/Loading";
import Carousel from 'react-material-ui-carousel';

export function Home() {
  const [studentCount, setStudentCount] = useState<number>(0);
  const [professorCount, setProfessorCount] = useState<number>(0);
  const [landingInfo, setLandingInfo] = useState<LandingInfo>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    const fetchLandingInfo = async () => {
      const result = await getLandingInfo();
      setLandingInfo(result.data);
      setLoading(false);
    };

    if (!landingInfo) {
      fetchLandingInfo();
    }
  },);

  useEffect(() => {
    if (!loading && landingInfo) {
      let startStudent = 0;
      let startProfessor = 0;
      const incrementStudent = Math.ceil(landingInfo.student_count / 100);
      const incrementProfessor = Math.ceil(landingInfo.professor_count / 100);

      const timerStudent = setInterval(() => {
        startStudent += incrementStudent;
        if (startStudent >= landingInfo.student_count) {
          setStudentCount(landingInfo.student_count);
          clearInterval(timerStudent);
        } else {
          setStudentCount(startStudent);
        }
      }, 10);

      const timerProfessor = setInterval(() => {
        startProfessor += incrementProfessor;
        if (startProfessor >= landingInfo.professor_count) {
          setProfessorCount(landingInfo.professor_count);
          clearInterval(timerProfessor);
        } else {
          setProfessorCount(startProfessor);
        }
      }, 10);

      return () => { clearInterval(timerProfessor), clearInterval(timerStudent) };
    }
  }, [loading, landingInfo]);

  const [isTopUniversitiesVisible, setIsTopUniversitiesVisible] = useState(false);
  const [isTopProfessorsVisible, setIsTopProfessorsVisible] = useState(false);
  const [isTopStudentsVisible, setIsTopStudentsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;

      const topUnversitiesSectionOffset = document.getElementById('top-universities')?.offsetTop ?? 0;
      const topProfessorsSectionOffset = document.getElementById('top-professors')?.offsetTop ?? 0;
      const topStudentsSectionOffset = document.getElementById('top-students')?.offsetTop ?? 0;

      if (scrollPosition > topUnversitiesSectionOffset) {
        setIsTopUniversitiesVisible(true);
      }

      if (scrollPosition > topProfessorsSectionOffset) {
        setIsTopProfessorsVisible(true);
      }

      if (scrollPosition > topStudentsSectionOffset) {
        setIsTopStudentsVisible(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const globalClasses = Styles();
  const homeClasses = HomeStyles();

  return (
    <>
      <Navbar showAuthButtons={true} showAuthButton={true} />
      <Box sx={{ height: '100px' }}></Box>
      <Search />

      {
        loading
          ?
          <Loading />
          :
          <>

            <StyledIntro>

              <Grow
                in={!loading}
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
                  <LineChart height={250} series={[
                    { curve: "linear", data: landingInfo?.growth.map(x => x[1]), color: theme.palette.chartColor, showMark: false, },
                  ]} sx={{ backgroundColor: 'transparent', borderRadius: theme.shape.borderRadius, }} className={clsx(homeClasses.chartStyle)} />
                  <Box className={clsx(globalClasses.flexRow, globalClasses.justifyContentBetween)} gap={'8px'}>
                    <StyledSuprisedStudent />
                    <Slide direction="up" mountOnEnter unmountOnExit in={!loading} {...({ timeout: 1000 })}>
                      <Typography variant="h6">
                        Site's Growth Over Time
                      </Typography>
                    </Slide>
                    <StyledSuprisedStudent />
                  </Box>
                </Box>

                <Box className={clsx(globalClasses.flexColumn)}>
                  {/* <Collapse mountOnEnter unmountOnExit in={!loading} orientation="horizontal" style={{ transitionDelay: '400ms' }}> */}
                  <StyledSlogan variant="h5" textAlign={'center'}>
                    Apply to The Seven Continets With Us!
                  </StyledSlogan>
                  {/* </Collapse> */}
                  <Spacer />
                  <Box className={clsx(globalClasses.flexRow, globalClasses.justifyContentBetween)} marginBlockEnd={6} marginInlineStart={3} marginInlineEnd={3}>

                    <Tooltip title="site's professors">
                      <Box className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)} width={'45%'}>
                        <Grow in={!loading}
                          style={{ transformOrigin: 'bottom' }}
                          {...({ timeout: 1000 })}>
                          <StyledProfessorIcon />
                        </Grow>
                        <Slide direction="right" mountOnEnter unmountOnExit in={!loading} {...({ timeout: 1000 })}>
                          <Typography variant="h6">
                            {professorCount}
                          </Typography>
                        </Slide>
                      </Box>
                    </Tooltip>

                    <Tooltip title="site's students">
                      <Box className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)} width={'45%'}>
                        <Grow in={!loading}
                          style={{ transformOrigin: 'bottom' }}
                          {...({ timeout: 1000 })}>
                          <StyledStudentIcon />
                        </Grow>
                        <Slide direction="left" mountOnEnter unmountOnExit in={!loading} {...({ timeout: 1000 })}>
                          <Typography variant="h6">
                            {studentCount}
                          </Typography>
                        </Slide>
                      </Box>
                    </Tooltip>
                  </Box>
                </Box>


              </StyledDetailContainer>

            </StyledIntro >

            <Fade in={!loading && isTopUniversitiesVisible} style={{ transitionDelay: '1000ms' }}>
              <StyledTopEntities id="top-universities">

                <TopUniversitiesSideImage />

                <Box width={'40%'}>
                  <Carousel>
                    {landingInfo?.top_universities.map((item, index) => (
                      <Card sx={{ height: '22rem'}}>
                        <Typography>
                          {item.name}
                        </Typography>

                      </Card>
                    ))}
                  </Carousel>
                </Box>
              </StyledTopEntities>
            </Fade>


            <Fade in={!loading && isTopProfessorsVisible} style={{ transitionDelay: '1000ms' }}>
              <StyledTopEntities id="top-professors">

                <TopProfessorsSideImage />

                <Box width={'40%'}>
                  <Carousel>
                    {landingInfo?.top_professors.map((item, index) => (
                      <Card sx={{ height: '22rem'}}>
                        <Typography>
                          {item[0].user?.first_name}
                        </Typography>

                      </Card>
                    ))}
                  </Carousel>
                </Box>
              </StyledTopEntities>
            </Fade>

            <Fade in={!loading && isTopStudentsVisible} style={{ transitionDelay: '1000ms' }}>
              <StyledTopEntities id="top-students">

                <TopStudentsSideImage />

                <Box width={'40%'}>
                  <Carousel>
                    {landingInfo?.top_students.map((item, index) => (
                      <Card sx={{ height: '22rem'}}>
                        <Typography>
                          {item[0].user?.first_name}
                        </Typography>

                      </Card>
                    ))}
                  </Carousel>
                </Box>

              </StyledTopEntities>
            </Fade>
          </>
      }

      <Footer />
    </>
  )
}
