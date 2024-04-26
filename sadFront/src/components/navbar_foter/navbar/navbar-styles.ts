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
    backgroundColor: '#0F1035',
    color: '#ddd',
    padding: '20px',
    textAlign: 'center',
  },
  footerWrapper: {
    borderTop: '1px solid #ddd',
    width: '100%',
    margin: '0 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  searchBar: {
    marginRight:'-900px',
    backgroundColor: '#FFFAFA',
    padding: '1px',
    
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    border: '40%',
    outline: 'none',
    marginLeft: '10px',
    fontSize: '3px',
  },
  searchIcon: {
    color: '#757575',
    backgroundColor:'#FFFAFA',
  },
});

export default useStyles;
