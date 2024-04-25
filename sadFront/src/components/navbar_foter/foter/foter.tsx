import { Typography, IconButton, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import useStyles from './foter-styles';

function Footer() {
  const classes = useStyles(); 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div style={{float:'left'}} className={classes.footerWrapper}></div>
      <footer className={classes.footer} style={{ color: '#FFF5EE', padding: '0px 0' }}>
        <Typography align='center' variant="h6" style={{marginLeft:'-1150px' }}>7Apply</Typography>
        {/* <Avatar src={'src/assets/icons/logo.svg'}  style={{ width:'99px', marginRight: '-2px', marginLeft: '100px',marginTop:'-37px' ,display: isSmallScreen ? 'none' : 'block' }} /> */}
        <Typography style={{marginLeft:'1110px',marginTop:'-10px'}} variant="h6" gutterBottom>
          Get Social
        </Typography>
        <div>
          <IconButton style={{ textTransform: 'capitalize',marginLeft:'1120px'}} color="inherit" href="https://twitter.com">
            <TwitterIcon />
          </IconButton>
          <IconButton style={{ textTransform: 'capitalize' }} color="inherit" href="https://instagram.com">
            <InstagramIcon />
          </IconButton>
          <IconButton style={{ textTransform: 'capitalize'}} color="inherit" href="https://linkedin.com">
            <LinkedInIcon />
          </IconButton>
          <IconButton style={{ textTransform: 'capitalize'}} color="inherit" href="https://telegram.com">
            <TelegramIcon />
          </IconButton>
        </div>
        
        
        <Typography style={{marginLeft:'-550px',marginTop:'-80px', marginBottom:'14px'}} variant="h6" gutterBottom>
          About
        </Typography>
        <Button color="inherit" style={{ backgroundColor: 'transparent', textTransform: 'none', marginLeft:'-550px',marginTop:'-120px' }}>
          About
        </Button>
        <Button color="inherit" style={{ backgroundColor: 'transparent', textTransform: 'none',marginTop:'5px',marginLeft:'-60px'}}>
          Our Story
        </Button>
        <Button color="inherit" style={{ backgroundColor: 'transparent', textTransform: 'none',marginTop:'140px',marginLeft:'-78px'}}>
          Careers
        </Button>
        <Typography style={{marginLeft:'70px',marginTop:'-222px'}}    variant="h6" gutterBottom>
          Students
        </Typography>
        <Button color="inherit" style={{ backgroundColor: 'transparent', textTransform: 'none',marginTop:'-113px',marginLeft:'70px'}}>
          Schools
        </Button>
        <Button color="inherit" style={{ backgroundColor: 'transparent', textTransform: 'none',marginTop:'148px',marginLeft:'-65px'}}>
          Recruiters
        </Button>
        <Button color="inherit" style={{ backgroundColor: 'transparent', textTransform: 'none',marginTop:'10px',marginLeft:'-86px'}}>
          Register
        </Button>
        
        <Typography style={{marginLeft:'600px',marginTop:'-224px'}}  variant="h6" gutterBottom>
          Professor
        </Typography>
        <Button color="inherit" style={{ backgroundColor: 'transparent', textTransform: 'none', marginLeft:'460px',marginTop:'-164px'}}>
          Apply
        </Button>
        <Button color="inherit" style={{ backgroundColor: 'transparent', textTransform: 'none',marginTop:'-40px',marginLeft:'-57px'}}>
          Resources
        </Button>
        <Button color="inherit" style={{ backgroundColor: 'transparent', textTransform: 'none',marginTop:'100px',marginLeft:'-88px'}}>
          Press
        </Button>
        
        
      
        <Button style={{ textTransform: 'capitalize',marginTop:'200px',marginLeft:'-450px' }} color="inherit" href="/terms">Terms of Use</Button>
        <Button style={{ textTransform: 'capitalize',marginTop:'200px' }} color="inherit" href="/privacy">Privacy Policy</Button>
        <Button style={{ textTransform: 'capitalize',marginTop:'200px' }} color="inherit" onClick={scrollToTop}>Back to Top</Button>
      </footer>
    </div>
  );
}

export default Footer;
