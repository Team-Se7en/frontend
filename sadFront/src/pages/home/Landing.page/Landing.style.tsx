import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflowY: 'auto',
  },
  avatar: {
    marginLeft: '47%',
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    color: '#bde0fe',
    backgroundColor: '#03045e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    border: '3px solid #bde0fe',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    backgroundImage: 'linear-gradient(135deg, #bde0fe 0%, #03045e 100%)',
    transition: 'transform 0.3s ease-in-out',
  },
  button: {
    textTransform: 'lowercase',
  },
  footer: {
    backgroundColor: '#1603a5',
    color: '#ddd',
    padding: '20px',
    textAlign: 'center',
  },
  
});

export default useStyles;