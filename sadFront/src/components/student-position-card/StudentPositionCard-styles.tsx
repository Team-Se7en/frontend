// import { Card, CardContent, CardActions, Box } from "@mui/material";
// import styled from "styled-components";

// export const StyledStudentPositionCard = styled(Card)(({ theme }) => ({
//   borderRadius: theme.shape.borderRadius,

//   "&:hover": {
//     webkitBoxShadow: "0px 0px 15px 0px rgba(0,0,0,0.25)",
//     mozBoxShadow: "0px 0px 15px 0px rgba(0,0,0,0.25)",
//     boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.25)",
//   },
// }));

// export const StyledCardContent = styled(CardContent)(() => ({
//   display: "flex",
//   padding: "1.5rem",
//   flexDirection: "column",
//   gap: "0.5rem",
// }));

// export const StyledCardActions = styled(CardActions)(() => ({
//   padding: "0",
// }));

// export const DeaedLineAndButton = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   marginTop: "0.3rem",
//   gap: "1rem",
//   textAlign: "center",
//   alignItems: "center",
//   width: "30%",

//   [theme.breakpoints.down("lg")]: {
//     flexDirection: "row",
//     width: "100%",
//     justifyContent: "space-between",
//   },
// }));

// export const ProfAndUni = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "row",
//   gap: "1rem",
//   alignItems: "center",

//   [theme.breakpoints.down("lg")]: {
//     flexDirection: "column",
//     width: "100%",
//     gap: "0.2rem",
//     alignItems: "flex-start",
//   },
// }));

// export const Deadline = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",

//   [theme.breakpoints.down("lg")]: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: "0.5rem",
//   },
// }));

// export const ProgramInfo = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   gap: "0.5rem",

//   [theme.breakpoints.down("lg")]: {
//     gap: "0rem",
//   },
// }));

// export const BottemInfo = styled(Box)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "row",
//   gap: "0rem",
//   [theme.breakpoints.down("lg")]: {
//     flexDirection: "column",
//   },
// }));


import { Card, CardActions, CardContent, Chip } from "@mui/material";

import styled from "styled-components";
import theme from "../../Theme";

export const StyledCard = styled(Card)(() => ({
    // width: 'calc(100% - 10rem)',
    // maxWidth: '80rem',
    // minWidth: '20rem',
    // height: '10rem',
    height: '13rem',
    minHeight: '13rem',
    // maxHeight: '16rem',
    minWidth: '32rem',
    width: '90%',
    maxWidth: '45rem',
    // minHeight: '15rem',
    // aspectRatio: '16 / 7',
    margin: '1rem auto',
    position: 'relative',
    zIndex: '0',
    // backgroundImage: statusColor(props.status),
    // borderRadius: theme.shape.borderRadius,
    // [theme.breakpoints.between('sm', 'md')]: {
    //     aspectRation: '3 / 1',
    // },

    boxShadow: theme.shadows[12],

    [theme.breakpoints.down('sm')]: {
        aspectRatio: '6 / 5',
    },
}));

// export const StyledBackgroundImage = styled(Box)(({ theme }) => ({
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//     opacity: '0.05',
//     backgroundImage: `url(${CardBackground})`,
//     backgroundPosition: 'left top',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     zIndex: '-1',
// }));

export const StyledCardContent = styled(CardContent)(() => ({
    // height: 'calc(100% - 4.75rem)',
    // paddingBottom: '8px !important',
    // lineHeight: '1rem !important',

}));

export const StyledCardActions = styled(CardActions)(() => ({
    height: '2.25rem',
    '&:hover': {
        cursor: 'pointer',

    },
}));

export const StyledTag = styled(Chip)(() => ({
    // backgroundColor: 'white',
    // borderColor: theme.palette.iconButton,
}));

// export const StyledDescription = styled(Typography)(({ theme }) => ({
//     display: '-webkit-box',
//     WebkitBoxOrient: 'vertical',
//     marginTop: '0.25rem',
//     maxHeight: 'calc(100% - 5.5rem)',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',

//     [theme.breakpoints.up(1400)]: {
//         WebkitLineClamp: '6',
//     },

//     [theme.breakpoints.between(1300, 1400)]: {
//         WebkitLineClamp: '5',
//     },

//     [theme.breakpoints.between(1200, 1300)]: {
//         WebkitLineClamp: '4',
//     },

//     [theme.breakpoints.between(1100, 1200)]: {
//         WebkitLineClamp: '3 ',
//     },

//     [theme.breakpoints.down('sm')]: {
//         WebkitLineClamp: '11',
//     },

//     [theme.breakpoints.between(560, 580)]: {
//         WebkitLineClamp: '10',
//     },

//     [theme.breakpoints.between(540, 560)]: {
//         WebkitLineClamp: '9',
//     },

//     [theme.breakpoints.between(520, 540)]: {
//         WebkitLineClamp: '8',
//     },

//     [theme.breakpoints.between(500, 520)]: {
//         WebkitLineClamp: '7',
//     },

//     [theme.breakpoints.down(500)]: {
//         WebkitLineClamp: '6',
//     },
// }));