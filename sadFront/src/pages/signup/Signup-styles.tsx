import { ProfessorImage, StudentImage } from "@assets";
import { createStyles, makeStyles } from "@mui/styles";

const SignupStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            height: '100%',
            '& .studentImage': {
                height: 'inherit',
                background: `url(${StudentImage})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // width: '50%',
                opacity: '50%',
                '&:hover': {
                    opacity: '100%',
                }
            },
            '& .professorImage': {
                height: 'inherit',
                background: `url(${ProfessorImage})`,
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // width: '50%',
                opacity: '50%',
                '&:hover': {
                    opacity: '100%',
                }
            }
        }
    })
);

export default SignupStyles; 