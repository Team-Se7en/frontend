import { ApplicationProcess, AuthBackgroundImgae, NewPassword, Verification } from "@assets";
import { createStyles, makeStyles } from "@mui/styles";

const Styles = makeStyles(() => 
    createStyles({
        fullyCenter: {
            display: 'flex !important',
            justifyContent: 'center !important',
            alignItems: 'center !important',
        },
        displayFlex: {
            display: 'flex !important',
        },
        flexColumn: {
            display: 'flex !important',
            flexDirection: 'column',
        },
        flexRow: {
            display: 'flex !important',
            flexDirection: 'row',
        },
        logo: {
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
        },
        authBackground: {
            background: `url(${AuthBackgroundImgae})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingTop: '8rem',
            width: '100vw',
            height: '100vh',
        },
        justifySelfBottom: {
            marginTop: 'auto !important',
            marginBottom: '0 !important',
        },
        justifyContentBetween: {
            justifyContent: 'space-between !important',
        },
        verification: {
            background: `url(${Verification})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingTop: '8rem',
            width: '100vw',
            height: '100vh',
        },
        newpassword: {
            background: `url(${NewPassword})`,
            backgroundPosition: 'right center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingTop: '8rem',
            width: '100vw',
            height: '100vh',
        },
        
        forgotBackground: {
            background: `url(${ApplicationProcess})`,
            backgroundPosition: 'bottom left',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingTop: '10rem',
            width: '100vw',
            height: '100vh',
        }
    })
);


export default Styles;