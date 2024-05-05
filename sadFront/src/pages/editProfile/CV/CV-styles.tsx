import { makeStyles, createStyles } from "@mui/styles";

const CVStyles = makeStyles(() =>
    createStyles({
        background: {
            backgroundImage: 'linear-gradient(to bottom right,rgb(182, 248, 252), rgb(252, 182, 232))',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            overflow: 'auto'
        },
    })
);

export default CVStyles; 