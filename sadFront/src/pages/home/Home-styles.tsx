import { Box, Collapse, Typography } from "@mui/material";
import styled from "styled-components";
import theme from "../../Theme";
import { ChartImage, LandingImage, TopProfessorsImage, TopStudentsImage, TopUniversitiesImage } from "../../assets/images";
import { ProfessorIcon, StudentIcon, SuprisedStudentIcon } from "../../assets/icons";
import "../../assets/fonts/CalligraphyFLF.css";
import "./Home-animations.css"
import { makeStyles, createStyles } from "@mui/styles";

export const StyledIntro = styled(Box)(() => ({
    border: `1px solid ${theme.palette.borderColor}`,
    width: '80%',
    margin: '10rem auto 5rem auto',
    borderRadius: theme.shape.borderRadius,
    position: 'relative',
    minHeight: '20rem',
    background: `linear-gradient(to bottom right, white 25%, #AFCBFF)`
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
    margin: '2rem 12rem 2rem 11rem',
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
    position: 'absolute',
    right: '1rem',
    bottom: '1rem',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        cursor: 'pointer',
    },
    animation: 'bounce 1s ease-in-out infinite',
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
    margin: '2rem auto',
    width: '80%',
    // minHeight: '12rem',
    // display: 'flex',
    // justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
}));

export const TopUniversitiesSideImage = styled(Collapse)(() => ({
    backgroundImage: `url(${TopUniversitiesImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: 'calc(100% - 30rem) !important',
    maxWidth: '40rem',
    minWidth: '20rem !important',
    // height: 'auto',
    aspectRatio: '16 / 9',
    backgroundPosition: 'bottom',
    // borderTopRightRadius: '50%',
    // borderBottomRightRadius: '50%'
    borderRadius: '4px',
}));

export const TopStudentsSideImage = styled(Collapse)(() => ({
    backgroundImage: `url(${TopStudentsImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: 'calc(100% - 30rem) !important',
    maxWidth: '40rem',
    minWidth: '20rem !important',
    // height: 'auto',
    aspectRatio: '16 / 9',
    backgroundPosition: 'center',
    // borderTopRightRadius: '50%',
    // borderBottomRightRadius: '50%'
    borderRadius: '4px',
}));

export const TopProfessorsSideImage = styled(Collapse)(() => ({
    backgroundImage: `url(${TopProfessorsImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: 'calc(100% - 30rem) !important',
    maxWidth: '40rem',
    minWidth: '20rem !important',
    // height: 'auto',
    aspectRatio: '16 / 9',
    backgroundPosition: 'top',
    // borderTopRightRadius: '50%',
    // borderBottomRightRadius: '50%'
    borderRadius: '4px',
}));