import { makeStyles, createStyles } from "@mui/styles";

const CVStyles = makeStyles(() =>
    createStyles({
        background: {
            backgroundImage: 'linear-gradient(to bottom left ,#2b364a 30%, #7FC7D9)',
            // backgroundColor:'#7FC7D9',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            overflow: 'auto'
        },
        editBackground: {
            backgroundColor: 'whitesmoke',
            padding: '3rem',
            borderRadius: '1rem'
        }
    })
);

export default CVStyles; 