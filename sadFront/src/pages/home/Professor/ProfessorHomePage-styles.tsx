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
                top: '290px',
                left: '200px',

        }

    })
);

export default HomePageProfessorStyles;

// import { createStyles, makeStyles } from "@mui/styles";

// import { ProfessorHomePage } from "@assets";

// const HomePageProfessorStyles = makeStyles(() =>
//     createStyles({
//         paperContainer: {
//             backgroundImage: `url(${ProfessorHomePage})`,
//             width: '100%',
//             height: '50vh',  // Ensuring the container takes full viewport height
//             backgroundSize: 'cover',
//             backgroundPosition: 'top',
//             backgroundRepeat: 'no-repeat',
//         },

//         positions1: {
//             borderRadius: '1rem',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'start',
//             flexDirection: 'row',
//             // padding: '20px', // Consistent padding for visual symmetry
//             position: 'absolute', // Allows exact placement
//             top: '50%', // Vertically center
//             left: '10%', // 10% from the left
//             width: '40%', // Takes up 40% of the container width
//             transform: 'translateY(-50%)', // Centers the content vertically
//         },
        
//         positions2: {
//             borderRadius: '1rem',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'flex-start',
//             flexDirection: 'row',  
//             // padding: '20px', // Consistent padding for visual symmetry
//             position: 'absolute', // Allows exact placement
//             top: '50%', // Vertically center
//             right: '10%', // 10% from the right
//             width: '30%', // Takes up 40% of the container width
//             transform: 'translateY(-50%)', // Centers the content vertically
//         },

//         avatar: {
//             width: '200px',
//             height: '200px',
//             borderRadius: '50%',
//             color: '#bde0fe',
//             backgroundColor: '#03045e',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontWeight: 'bold',
//             border: '2px solid #bde0fe',
//             boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
//             backgroundImage: 'linear-gradient(135deg, #bde0fe 0%, #03045e 100%)',
//             padding: '1rem',
//             position: 'relative', // Relative positioning within its container
//         }
//     })
// );

// export default HomePageProfessorStyles;