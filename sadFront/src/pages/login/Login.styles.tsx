import { createStyles, makeStyles } from "@mui/styles";

import { AuthBackgroundImgae } from "@assets";

const LoginStyles = makeStyles(() =>
    createStyles({
        authBackground: {
            background: `url(${AuthBackgroundImgae})`,
            backgroundPosition: 'left center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingTop: '8rem',
            width: '100vw',
            height: '100vh',
        },
        wrapper: {
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '0.2rem',
            opacity: 0.91,
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',

            '& .avatar': {
                margin: '1rem',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                color: '#bde0fe',
                backgroundColor: '#03045e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                fontWeight: 'bold',
                border: '3px solid #bde0fe',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                backgroundImage: 'linear-gradient(135deg, #bde0fe 0%, #03045e 100%)',
                transition: 'transform 0.3s ease-in-out',
                
        
                '&:hover': {
                    transform: 'scale(1.1)', 
                    boxShadow: '0 6px 12px 0 rgba(0, 0, 0, 0.3)',
                }
                },
        

            '& .login-btn': {
                marginTop: '2rem',
                marginBottom: '1rem',
                padding: '10px 10px',
                fontSize: '1rem',
                fontWeight: '550',
                textTransform: 'uppercase',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: '#03045e',
                color: 'white',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
        
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
            }
        },
    })
);

export default LoginStyles;
