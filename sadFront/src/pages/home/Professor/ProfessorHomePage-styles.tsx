import { createStyles, makeStyles } from "@mui/styles";

const HomePageProfessorStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '0.2rem',
            opacity: 0.91,
            display: 'flex',
            alignItems: 'space-evenly',
            justifyContent:'space-evenly',
            position: 'absolute',
        },

        
    })
);

export default HomePageProfessorStyles;
