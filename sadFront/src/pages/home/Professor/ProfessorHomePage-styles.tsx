import { createStyles, makeStyles } from "@mui/styles";

import { ProfessorHomePage } from "@assets";

const HomePageProfessorStyles = makeStyles((theme) => createStyles({
    paperContainer: {
        backgroundImage: `url(${ProfessorHomePage})`,
        width: '100%',
        height: '30vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: '20px'
    },
    
    avatar: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        color: '#bde0fe',
        backgroundColor: '#03045e',
        display: 'flex',
        flexwrap: 'wrap', 
        
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
        background: '#0437c2 !important',
        color:'white !important',



    },

    addprogrambutton:{
        borderRadius: '50%',
        fontWeight: 'bold',
        margin: '1rem',
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0437c2 !important',
        color:'white !important',



    },

    
    socialicons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        margin: '1rem',
    },
    
    positions: {
        borderRadius: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // padding: '1rem',
        // marginTop: '50px',
        margin: 'auto',
    },
    
}));

export default HomePageProfessorStyles;
