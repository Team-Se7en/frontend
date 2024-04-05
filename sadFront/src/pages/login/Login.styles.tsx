import { createStyles, makeStyles } from "@mui/styles";

const LoginStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            backgroundColor: 'white',
            borderRadius: '1rem',
            padding: '1rem',

            '& .avatar': {
                margin: '1rem',
            },

            '& .login-btn': {
                marginTop: '1rem',
                marginBottom: '0.5rem',
            }
        },
    })
);

export default LoginStyles; 