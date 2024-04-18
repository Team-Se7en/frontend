import { ProfessorSignUpImage } from "@assets";
import { createStyles, makeStyles } from "@mui/styles";

const EditProfileStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '0.2rem',
            margin: '1rem 0',
            opacity: 0.91,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '45rem !important',
        },
        background: {
            backgroundImage: `url(${ProfessorSignUpImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // backgroundColor: 'lightskyblue',
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        },
        uperImage: {
            height: '10rem',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
        },
        profileImage: {
            height: '7rem',
            width: '7rem',
            margin: '0 1rem',
            borderRadius: '10px',
        },
        lowerButtons: {
            marginTop: '1rem !important',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }
    })
);

export default EditProfileStyles; 