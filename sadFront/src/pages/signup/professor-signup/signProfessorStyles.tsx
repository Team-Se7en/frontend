import { Container, Paper, TextField } from '@mui/material';

import { Padding } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(0.5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,

}));

export const FormTextField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(0.1),
    [`& fieldset`]: {
    borderRadius: '4px',
    backgroundColor: 'white',
},
}));

export const buttonThemeColor = {
    primary: '#03045E',
    contrastText: '#ffffff',
};
