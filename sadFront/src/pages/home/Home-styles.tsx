import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import theme from "../../Theme";
import { ChartImage, LandingImage, ProfessorTimelineImage, SlideshowProfessorImage, SlideshowStudentImage, SlideshowUniversityImage, StudentTimelineImage, TopProfessorsImage, TopStudentsImage, TopUniversitiesImage, WhyusProfessorImage, WhyusStudentImage } from "../../assets/images";
import { ProfessorIcon, StudentIcon, SuprisedStudentIcon } from "../../assets/icons";
import "../../assets/fonts/CalligraphyFLF.css";
import "./Home-animations.css"
import { makeStyles, createStyles } from "@mui/styles";

export const StyledTopCarouselSlide = styled(Box)(() => ({
    height: '40rem',
    backgroundColor: theme.palette.backgroundColor2,
    color: 'white',
}));

export const StyledIntro = styled(Box)(() => ({
    // border: `1px solid ${theme.palette.borderColor}`,
    width: '60%',
    margin: '-2rem auto 5rem auto',
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
    position: 'relative',
    zIndex: '2',
    minHeight: '18rem',
    backgroundColor: theme.palette.backgroundColor,
    boxShadow: theme.shadows[4],
    // background: `linear-gradient(to bottom right, white 25%, #AFCBFF)`
}));

export const StyledSiteName = styled(Typography)(() => ({
    textTransform: 'capitalize',
    transform: 'rotate(-45deg)',
    position: 'absolute',
    top: '8px',
    left: '-60px',
    backgroundColor: theme.palette.backgroundColor,
    // fontSize: '20px',

}));

export const StyledChartContainer = styled(Box)(() => ({
    borderRadius: theme.shape.borderRadius,
    position: 'absolute',
    right: '0',
    bottom: '0',
}));

export const StyledChartImageBox = styled(Box)(() => ({
    backgroundImage: `url(${ChartImage})`,
    opacity: '30%',
}));

export const StyledDetailContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    // width: '80%',
    // marginLeft: 'auto !important',
    margin: '2rem 0',
    padding: '2rem',
    gap: '1rem',
    justifyContent: 'space-between',
}));

export const StyledGlobe = styled(Box)(() => ({
    backgroundImage: `url(${LandingImage})`,
    width: '15rem',
    height: '15rem',
    backgroundSize: 'contain',
    borderRadius: '50%',
    position: 'absolute',
    right: '-4rem',
    top: '-4rem',
    animation: 'spin 36s linear infinite',
}));

export const StyledProfessorIcon = styled(Box)(() => ({
    backgroundImage: `url(${ProfessorIcon})`,
    width: '100%',
    // height: '6rem',
    aspectRatio: '1',
    backgroundSize: 'contain',
}));

export const StyledStudentIcon = styled(Box)(() => ({
    backgroundImage: `url(${StudentIcon})`,
    width: '100%',
    // height: '6rem',
    aspectRatio: '1',
    backgroundSize: 'contain',
}));

export const StyledSuprisedStudent = styled(Box)(() => ({
    backgroundImage: `url(${SuprisedStudentIcon})`,
    height: '2rem',
    // height: '6rem',
    aspectRatio: '1',
    borderRadius: '50%',
    backgroundSize: 'contain',
}));

export const StyledJoinUsText = styled(Typography)(() => ({
    // position: 'absolute',
    right: '1rem',
    bottom: '1rem',
    // transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        cursor: 'pointer',
    },
    // color: '#000 !important',
    // color: 'gray',
    // animation: 'bounce 1s ease-in-out infinite',
}));

export const StyledSlogan = styled(Typography)(() => ({
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    background: 'linear-gradient(90deg, #00e6e6, #005ce6, #0000e6)',
    backgroundSize: '200% 100%',
    animation: 'colorPassThrough 5s linear infinite',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    // animation: 'bounceWord 1s ease infinite', 
}));

export const HomeStyles = makeStyles(() =>
    createStyles({
        chartStyle: {
            '& .MuiChartsGrid-line': {
                strokeWidth: '3px !important',
            }
        }
    })
);

export const StyledTopEntities = styled(Box)(() => ({
    margin: '8rem auto 4rem auto',
    width: '80%',
    // minHeight: '12rem',
    // display: 'flex',
    // justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));

export const TopUniversitiesSectionImage = styled(Box)(() => ({
    backgroundImage: `url(${TopUniversitiesImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // aspectRatio: '16 / 7',
    backgroundPosition: 'top',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    position: 'relative',
}));

export const TopStudentsSectionImage = styled(Box)(() => ({
    backgroundImage: `url(${TopStudentsImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // aspectRatio: '17 / 7',
    backgroundPosition: 'top',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    position: 'relative',
}));

export const TopProfessorsSectionImage = styled(Box)(() => ({
    backgroundImage: `url(${TopProfessorsImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    // aspectRatio: '16 / 7',
    backgroundPosition: 'top',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    position: 'relative',
}));

export const StyledTopSectionTitle = styled(Typography)(() => ({
    fontSize: '4rem',
    position: 'absolute',
    top: '1rem',
    textShadow: '-1px 1px 10px rgba(0, 0, 0, 0.75)',
}));

export const StyledTimelineProfessor = styled(Box)(() => ({
    backgroundImage: `url(${ProfessorTimelineImage})`,
    backgroundSize: 'cover',
    aspectRatio: '1',
    // width: '50%'
    height: '100%',
}));

export const StyledTimelineStudent = styled(Box)(() => ({
    backgroundImage: `url(${StudentTimelineImage})`,
    backgroundSize: 'cover',
    aspectRatio: '1',
    // width: '50%'
    height: '100%',
}));

export const StyledWhyusProfessorImage = styled(Box)(() => ({
    backgroundImage: `url(${WhyusProfessorImage})`,
    backgroundSize: 'cover',
    aspectRatio: '1',
    // width: '50%'
    height: '100%',
}));

export const StyledWhyusStudentImage = styled(Box)(() => ({
    backgroundImage: `url(${WhyusStudentImage})`,
    backgroundSize: 'cover',
    aspectRatio: '1',
    // width: '50%'
    height: '100%',
}));

export const StyledSlideshowUniversityImage = styled(Box)(() => ({
    backgroundImage: `url(${SlideshowUniversityImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100% - 5rem)',
    aspectRatio: '1',
    marginTop: 'auto',  
    borderRadius: theme.shape.borderRadius,
}));

export const StyledSlideshowProfessorImage = styled(Box)(() => ({
    backgroundImage: `url(${SlideshowProfessorImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100% - 5rem)',
    aspectRatio: '1',
    marginTop: 'auto',  
    borderRadius: theme.shape.borderRadius,
}));

export const StyledSlideshowStudentImage = styled(Box)(() => ({
    backgroundImage: `url(${SlideshowStudentImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100% - 5rem)',
    aspectRatio: '1',
    marginTop: 'auto',  
    borderRadius: theme.shape.borderRadius,
}));

export const StyledUniversityIcon = styled('img')(() => ({
    width: '5rem',
    aspectRatio: '1',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.2)',
        cursor: 'pointer',
    }
}));