import { LineChart } from "@mui/x-charts";

import "../../assets/fonts/CalligraphyFLF.css";
import "../../assets/fonts/GreatVibes-Regular.css";

import { Box, Divider, Fade, Grid, Grow, Link, Tooltip, Typography } from "@mui/material";
import { HomeStyles, StyledDetailContainer, StyledIntro, StyledJoinUsText, StyledProfessorIcon, StyledStudentIcon, StyledTopCarouselSlide, TopProfessorsSectionImage, TopStudentsSectionImage, TopUniversitiesSectionImage, StyledTimelineProfessor, StyledTimelineStudent, StyledTopSectionTitle, StyledWhyusProfessorImage, StyledWhyusStudentImage, StyledSlideshowUniversityImage, StyledUniversityIcon, StyledSlideshowStudentImage, StyledSlideshowProfessorImage } from "./Home-styles";
import Carousel from 'react-material-ui-carousel';
import clsx from "clsx";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer/footer";
import Navbar from "../../components/navbar/navbar/navbar";
import { Loading } from "../../components/ui/Loading";
import { LandingInfo } from "../../models/LandingInfo";
import { getLandingInfo } from "../../services/landing.service";
import Styles from "../../Styles";
import theme from "../../Theme";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { siteUrl } from "../../Http/axios";
import { useNavigate } from "react-router-dom";
import ProgramCard from "../../components/programcard/ProgramCard";
import { ProfessorRequestCard } from "../../components/professor-request-card/ProfessorRequestCard";
import { UniversityCard } from "../../components/university-card/UnversityCard";
import { StudentCard } from "../../components/student-card/StudentCard";
import "./Home.css"
import { getPlacementColor } from "../../lib/global-util";
import { ProfessorCard } from "../../components/professor-card/ProfessorCard";

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

  const [isWhyusVisible, setIsWhyusVisible] = useState(false);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const [isTopUniversitiesVisible, setIsTopUniversitiesVisible] = useState(false);
  const [isTopProfessorsVisible, setIsTopProfessorsVisible] = useState(false);
  const [isTopStudentsVisible, setIsTopStudentsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;

      const whyusOffset = document.getElementById('why-us')?.offsetTop ?? 0;
      const timelineOffset = document.getElementById('timeline')?.offsetTop ?? 0;
      const topUnversitiesSectionOffset = document.getElementById('top-universities')?.offsetTop ?? 0;
      const topProfessorsSectionOffset = document.getElementById('top-professors')?.offsetTop ?? 0;
      const topStudentsSectionOffset = document.getElementById('top-students')?.offsetTop ?? 0;

      if (scrollPosition > whyusOffset) {
        setIsWhyusVisible(true);
      }

      if (scrollPosition > timelineOffset) {
        setIsTimelineVisible(true);
      }

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

  const handleUniversityClick = (id: number): void => {
    window.open(`/universityPage${id}`, '_blank');
  }

  const globalClasses = Styles();
  const homeClasses = HomeStyles();

  return (
    <>
      <Navbar showAuthButtons={true} showAuthButton={true} />
      {/* <Box sx={{ height: '100px' }}></Box> */}

      {
        loading
          ?
          <Loading />
          :
          <Box sx={{ backgroundColor: theme.palette.backgroundColor }}>
            <Carousel animation="slide" navButtonsAlwaysInvisible cycleNavigation indicators={false}>
              <StyledTopCarouselSlide>
                <Box className={clsx(globalClasses.flexRow, globalClasses.vCenter)} sx={{ height: '100%', gap: '14%', pl: '10%' }}>
                  <StyledSlideshowUniversityImage />
                  <Box className={clsx(globalClasses.flexColumn)} paddingTop={'7rem !important'}>
                    <Typography variant={'h4'}>
                      Positions From Various Universities
                    </Typography>
                    <Grid container spacing={2} marginTop={'1rem'} maxWidth={'50rem'}>
                      {
                        landingInfo?.random_universities.slice(0, 9).map((item, index) => (
                          <>
                            <Grid item xs={2} key={index}>
                              <StyledUniversityIcon onClick={() => handleUniversityClick(item.id)} src={siteUrl + item.icon} />
                            </Grid>
                            <Grid item xs={2} key={index}>
                              <StyledUniversityIcon onClick={() => handleUniversityClick(item.id)} src={siteUrl + item.icon} />
                            </Grid>
                          </>
                        ))
                      }
                    </Grid>
                  </Box>
                </Box>
              </StyledTopCarouselSlide>

              <StyledTopCarouselSlide>
                <Box className={clsx(globalClasses.flexRow, globalClasses.vCenter)} sx={{ height: '100%', gap: '14%', pl: '10%' }}>
                  <StyledSlideshowProfessorImage />
                  <Box className={clsx(globalClasses.flexColumn)} paddingTop={'7rem !important'}>
                    <Typography variant="h3">
                      Define Various Tasks!
                    </Typography>
                    <Box flex={1} className={clsx(globalClasses.flexColumn)}>
                      {
                        landingInfo?.professor_view_positions.map((item, index) => (
                          <Box flexShrink={1}>
                            <ProfessorRequestCard key={index} model={item} disable />
                          </Box>
                        ))
                      }
                    </Box>
                  </Box>
                </Box>
              </StyledTopCarouselSlide>

              <StyledTopCarouselSlide>
                <Box className={clsx(globalClasses.flexRow, globalClasses.vCenter)} sx={{ height: '100%', gap: '14%', pl: '10%' }}>
                  <StyledSlideshowStudentImage />
                  <Box className={clsx(globalClasses.flexColumn)} paddingTop={'6rem !important'}>
                    <Typography variant="h3">
                      Ease the Pain of Applying
                    </Typography>
                    <Box flex={1} className={clsx(globalClasses.flexColumn)}>
                      {
                        landingInfo?.student_view_positions.map((item, index) => (
                          <Box flexShrink={1}>
                            <ProgramCard key={index} professor={item.professor} description={""}
                              capacity={item.capacity} university_name={item.university_name} university_id={item.university_id}
                              id={0} title={item.title} status={item.status}
                              end_date={item.end_date} tags={item.tags} fee={0}
                              start_date={item.start_date} position_start_date={item.position_start_date}
                              position_end_date={item.position_end_date} />
                          </Box>
                        ))
                      }
                    </Box>
                  </Box>
                </Box>
              </StyledTopCarouselSlide>
            </Carousel>
            <StyledIntro maxWidth={'md'}>

              <StyledDetailContainer>
                <Box className={clsx(globalClasses.flexColumn, globalClasses.fullyCenter)} gap={2} width={'60%'} minWidth={'300px'}>
                  <LineChart height={300} series={[
                    { curve: "linear", data: landingInfo?.growth.map(x => x[1]), color: theme.palette.chartColor, showMark: false, },
                  ]} sx={{ backgroundColor: 'transparent', borderRadius: theme.shape.borderRadius, }} className={clsx(homeClasses.chartStyle)} />
                </Box>

                <Box width={'40%'} className={clsx(globalClasses.flexColumn)} justifyContent={'space-around'}>
                  <Box className={clsx(globalClasses.flexRow, globalClasses.justifyContentBetween)} marginBlockEnd={6} marginInlineStart={3} marginInlineEnd={3}>

                    <Tooltip title="site's professors">
                      <Box className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)} width={'45%'}>
                        <Grow in={!loading}
                          style={{ transformOrigin: 'bottom' }}
                          {...({ timeout: 1000 })}>
                          <StyledProfessorIcon />
                        </Grow>
                        <Typography variant="h6">
                          {professorCount}
                        </Typography>
                      </Box>
                    </Tooltip>

                    <Tooltip title="site's students">
                      <Box className={clsx(globalClasses.fullyCenter, globalClasses.flexColumn)} width={'45%'}>
                        <Grow in={!loading}
                          style={{ transformOrigin: 'bottom' }}
                          {...({ timeout: 1000 })}>
                          <StyledStudentIcon />
                        </Grow>
                        <Typography variant="h6">
                          {studentCount}
                        </Typography>
                      </Box>
                    </Tooltip>
                  </Box>

                  <Link href="/signup" lineHeight={0} sx={{ textDecoration: 'none', }} >
                    <StyledJoinUsText variant="h4" textAlign={'center'}>
                      Join Us Now!
                    </StyledJoinUsText>
                  </Link>
                </Box>

              </StyledDetailContainer>

            </StyledIntro >

            <Fade in={!loading && isWhyusVisible} style={{ transitionDelay: '500ms' }} id="why-us">
              <Box>
                <Divider sx={{ fontSize: '4rem', fontFamily: '"Roboto","Helvetica","Arial",sans-serif' }} textAlign="center">
                  Why Us
                </Divider>
                <Box marginTop={'-37px'} className={clsx(globalClasses.flexRow, globalClasses.justifyContentBetween, globalClasses.vCenter)} height={'22rem'}>
                  <StyledWhyusProfessorImage />

                  <Typography variant="h4" textAlign='center' width={'50%'} sx={{ padding: '0 2rem' }}>
                    We are the only platform specialized for connecting professors with students for accomplishing great tasks
                  </Typography>

                  <StyledWhyusStudentImage />
                </Box>
              </Box>
            </Fade>

            <Fade in={!loading && isTimelineVisible} style={{ transitionDelay: '800ms' }} id="timeline">
              <Box>
                <Divider sx={{ fontSize: '4rem', mt: '-37px', fontFamily: '"Roboto","Helvetica","Arial",sans-serif' }} textAlign={'center'}>
                  Get Started in a few steps
                </Divider>
                <Box>
                  <Box marginTop={'-38px'} className={clsx(globalClasses.flexRow)} height={'22rem'}>
                    <Box width={'50%'} className={clsx(globalClasses.flexRow)}>
                      <StyledTimelineProfessor />
                      <Timeline position="left" sx={{ width: '50%', mt: '4rem' }}>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot sx={{ backgroundColor: '#eceaf6' }} />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            <Typography>
                              Signup
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot sx={{ backgroundColor: '#9883e8' }} />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            <Typography>
                              Complete your CV
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot sx={{ backgroundColor: '#444ed3' }} />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            <Typography>
                              Create a Custom Position
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot sx={{ backgroundColor: '#000000' }} />
                          </TimelineSeparator>
                          <TimelineContent>
                            <Typography>
                              Wait for students application or find them yourself!
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                      </Timeline>
                    </Box>
                    <Box width={'50%'} className={clsx(globalClasses.flexRow)}>
                      <Timeline sx={{ width: '50%', mt: '4rem' }}>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot sx={{ backgroundColor: '#eceaf6' }} />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            <Typography>
                              Signup
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot sx={{ backgroundColor: '#9883e8' }} />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            <Typography>
                              Look for positions with your favourite topics
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot sx={{ backgroundColor: '#444ed3' }} />
                            <TimelineConnector />
                          </TimelineSeparator>
                          <TimelineContent>
                            <Typography>
                              Complete your CV to have a higher chance of acceptance
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot sx={{ backgroundColor: '#000000' }} />
                          </TimelineSeparator>
                          <TimelineContent>
                            <Typography>
                              Apply and get started!
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                      </Timeline>
                      <StyledTimelineStudent />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Fade>

            <Fade in={!loading && isTopUniversitiesVisible} style={{ transitionDelay: '800ms' }} id="top-universities">

              <TopUniversitiesSectionImage>
                <StyledTopSectionTitle color={"white"}>
                  Top Universities
                </StyledTopSectionTitle>


                <Box width={'50%'} sx={{ aspectRatio: '2.5' }}>
                  <Carousel>
                    {landingInfo?.top_universities.map((item, index) => (
                      <UniversityCard key={index} university={item} rgba={getPlacementColor(item.rank)} />
                    ))}
                  </Carousel>
                </Box>
              </TopUniversitiesSectionImage>
            </Fade>

            <Fade in={!loading && isTopProfessorsVisible} style={{ transitionDelay: '800ms' }} id="top-professors">

              <TopProfessorsSectionImage>
                <StyledTopSectionTitle color={"white"}>
                  Top Professors
                </StyledTopSectionTitle>

                <Box width={'50%'} sx={{ aspectRatio: '2.5' }}>
                  <Carousel>
                    {landingInfo?.top_professors.map((item, index) => (
                      <ProfessorCard key={index} professor={item} rgba={getPlacementColor(item.rank)}/>
                    ))}
                  </Carousel>
                </Box>
              </TopProfessorsSectionImage>

            </Fade>

            <Fade in={!loading && isTopStudentsVisible} style={{ transitionDelay: '800ms' }} id="top-students">

              <TopStudentsSectionImage>

                <StyledTopSectionTitle color={"white"}>
                  Top Students
                </StyledTopSectionTitle>

                <Box width={'50%'} sx={{ aspectRatio: '2.5' }}>
                  <Carousel>
                    {landingInfo?.top_students.map((item, index) => (
                      <StudentCard key={index} student={item} rgba={getPlacementColor(item.rank)} />
                    ))}
                  </Carousel>
                </Box>
              </TopStudentsSectionImage>

            </Fade>
          </Box>
      }

      <Footer />
    </>
  )
}
