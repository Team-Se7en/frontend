import { createStyles, makeStyles } from "@mui/styles";

import { AuthBackgroundImgae } from "@assets";

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
        }
    })
);

export default Styles;