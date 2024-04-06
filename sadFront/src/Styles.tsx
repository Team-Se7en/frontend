import { AuthBackgroundImgae } from "@assets";
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
            backgroundPosition: 'bottom left',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingTop: '8rem',
            width: '100vw',
            height: '100vh',
        }
    })
);

export default Styles;