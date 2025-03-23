import { createStyles, makeStyles } from "@mui/styles";

const StudentSignUpStyles = makeStyles(() =>
    createStyles({
        Studentaccept: {
            backgroundColor:"#696969",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: '104vh',
            width: '100vm',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            },

        wrapper: {
            width:"200%",
            marginLeft:"-200px",
            marginTop:"50px",
            display: "flex",
            
           
            
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '2.5rem 1rem',
            opacity: 0.91,


            },

            button1: {
                width:'250px',
                marginTop: "2rem",
                marginBottom: "2rem",
                padding: "10px 20px !important",
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#03045e !important",
                color: "white !important",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",
                margin: "24px 0 16px 250px !important" ,
                
                '&:hover': {
                    backgroundColor: '#023e8a',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    },
            
                    '&:active': {
                    backgroundColor: '#002855',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    transform: 'translateY(2px)',
                    },
            
                    '&:focus': {
                    outline: 'none',
                    borderColor: '#bde0fe',
                    boxShadow: '0 0 0 2px #bde0fe88',
                    }
            },
        

    })
);

export default StudentSignUpStyles;
