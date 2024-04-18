import { createStyles, makeStyles } from "@mui/styles";

import { ProfessorHomePage } from "@assets";

const HomePageProfessorStyles = makeStyles(() =>
    createStyles({
        paperContainer: {
            backgroundImage: `url(${ProfessorHomePage})`,
            width: '100%',
            height: '50vh',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            
        },

        positions1 : {
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'flex-start',
            flexDirection: 'row',
            position: 'absolute',
            padding: '500px 5px 5px 5px ',


        },
        
        positions2: {
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',  
            position: 'absolute', 
            padding: '500px 5px 5px 700px ',
        },

        avatar: {
                width: '1000px',
                height: '1000px',
                borderRadius: '50%',
                color: '#bde0fe',
                backgroundColor: '#03045e',
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'space-between',
                fontWeight: 'bold',
                border: '2px solid #bde0fe',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                backgroundImage: 'linear-gradient(135deg, #bde0fe 0%, #03045e 250%)',
                padding: '2rem',
                position: 'absolute',
                top: '250px',
                left: '200px',
                

        },

        editprofilebutton:{
            width: '120px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            position: 'absolute',
            top: '350px',
            left: '1200px',
            padding: '10px 10px',

        },

        socialicons:{
            width: '100px',
            height: '40px',
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            position: 'absolute',
            top: '350px',
            left: '1000px',
            padding: '10px',
            
        }

    })
);

export default HomePageProfessorStyles;
