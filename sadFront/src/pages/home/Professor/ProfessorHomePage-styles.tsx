import { createStyles, makeStyles } from "@mui/styles";

import { ProfessorHomePage } from "@assets";

const HomePageProfessorStyles = makeStyles((theme) => createStyles({
    paperContainer: {
        backgroundImage: `url(${ProfessorHomePage})`,
        width: '100%',
        height: '50vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'space-between',
        paddingBottom: '20px',

    },
    
    avatar: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        color: '#bde0fe',
        backgroundColor: '#03045e',
        display: 'flex',
        margin: '0 auto', 
        border: '2px solid #bde0fe',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        
    },
    
    editprofilebutton: {
        borderRadius: '50%',
        fontWeight: 'bold',
        margin: '1rem',
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },

    
    socialicons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        margin: '1rem',
    },
    
    positions1: {
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '1rem',
        marginTop: '50px',
    },
    
    positions2: {
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '1rem',
        marginTop: '50px',
    }
}));

export default HomePageProfessorStyles;
