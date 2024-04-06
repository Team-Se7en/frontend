import { ProfessorImage, StudentImage } from "@assets";
import { createStyles, makeStyles } from "@mui/styles";

const SignupStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            height: '100%',
            '& .signupImage': {
                height: 'inherit',
                backgroundPosition: 'top !important',
                backgroundSize: 'cover !important',
                backgroundRepeat: 'no-repeat !important',
                transitionDuration: '.3s',
                position: 'relative',
                overflow: 'hidden',
                opacity: '.5',

                '&:hover': {
                    opacity: '1',

                    '& .signupText': {
                        fontSize: '0',
                    }
                },

                '& .signupText': {
                    margin: 'auto !important',
                    fontSize: '3rem !important',
                    color: 'darkblue',
                    transition: 'font-size .3s ease',
                    // position: 'relative',
                    zIndex: '1',
                    opacity: '1',
                }
            },

            '& .studentImage': {
                background: `url(${StudentImage})`,
            },

            '& .professorImage': {
                background: `url(${ProfessorImage})`,
            }
        },
    })
);

export default SignupStyles; 