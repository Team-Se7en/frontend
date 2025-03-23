import { makeStyles, createStyles } from "@mui/styles";
import { ProfessorSignUpImage } from "../../assets/images";

const EditProfileStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            padding: '0 !important',
            margin: '1rem 0',
            opacity: 0.91,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '30rem !important',
            width: '70% !important',
            height: 'calc(100vh - 4rem) !important',
            overflow: 'auto'
        },
        background: {
            // backgroundImage: `url(${ProfessorSignUpImage})`,
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            backgroundColor: '#001C30',
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        uperImage: {
            height: '10rem',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center'
        },
        profileImage: {
            height: '7rem',
            width: '7rem',
            margin: '0 1rem',
            borderRadius: '10px',
        },
        lowerButtons: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    })
);

export default EditProfileStyles; 