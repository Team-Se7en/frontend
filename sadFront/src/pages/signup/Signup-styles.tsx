import { Height, WidthFull } from "@mui/icons-material";
import { ProfessorImage, StudentImage } from "@assets";
import { createStyles, makeStyles } from "@mui/styles";

const SignupStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            height: '100%',
            backgroundColor: '#ccdbdc',

            '& .signupImage': {
                backgroundPosition: 'top !important',
                backgroundSize: 'cover !important',
                backgroundRepeat: 'no-repeat !important',
                transitionDuration: '.3s',
                position: 'relative',
                overflow: 'hidden',
                opacity: '0.85',
                height: '400px',
                width: '35%',
                margin: '100px 100px 100px 100px',


                '&:hover': {
                    opacity: '1',

                    '& .signupText': {
                        fontSize: '0',
                        transition: 'all 0.3s ease',

                    }
                },

                '& .signupText': {
                    margin: '10px',
                    fontSize: '1rem',
                    color: 'white',
                    fontWeight: '600',
                    transition: 'all 0.5s ease',
                    opacity: '1',
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                    borderRadius: '50px',
                    border: 'none',
                    backgroundColor: '#03045e',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'flex-start', 
                    textAlign: 'center',
                    padding: '10px',
                    position: 'absolute',
                    bottom: '0',
                    left: '10',
                    right: '10',
                }

                
            },

            '& .studentImage': {
                background: `url(${StudentImage})`,
            },

            '& .professorImage': {
                background: `url(${ProfessorImage})`,
            },


            // '& .ProfessorSignup':{
            //     background: `url(${ProfessorImageSignUp})`,
            // },




        },
    })
);

export default SignupStyles; 