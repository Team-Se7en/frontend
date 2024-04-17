import { createStyles, makeStyles } from "@mui/styles";

import { ProfessorHomePage } from "@assets";

const HomePageProfessorStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            borderRadius: '1rem',
            padding: '0.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            position: 'absolute',
        },

        paperContainer: {
            backgroundImage: `url(${ProfessorHomePage})`,
            width: '100%',
            height: '50vh',  // Make sure it covers at least the full view height
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            
        }

        
    })
);

export default HomePageProfessorStyles;
