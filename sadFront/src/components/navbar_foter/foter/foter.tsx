import { Typography, IconButton, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import useStyles from './foter-styles'; // استایل‌های مربوطه را وارد کنید

function Footer() {
  const classes = useStyles(); // استایل‌ها را اعمال کنید

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className={classes.footerWrapper}></div>
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
        <Button color="inherit" style={{ backgroundColor: 'transparent', textTransform: 'none', marginLeft:'-550px',marginTop:'-13px' }}>
          About
        </Button>
        <Typography style={{marginLeft:'50px',marginTop:'-69px'}}    variant="h6" gutterBottom>
          Students
        </Typography>
        <Button color="inherit" style={{ backgroundColor: 'transparent', textTransform: 'none', marginLeft:'50px',marginTop:'-5px' }}>
          Schools
        </Button>
        
        <Typography style={{marginLeft:'600px',marginTop:'-66px'}}  variant="h6" gutterBottom>
          Professor
        </Typography>
        <Button color="inherit" style={{ backgroundColor: 'transparent', textTransform: 'none', marginLeft:'450px',marginTop:'-60px'}}>
          Apply
        </Button>
        
      
        <Button style={{ textTransform: 'capitalize',marginTop:'40px',marginLeft:'-450px' }} color="inherit" href="/terms">Terms of Use</Button>
        <Button style={{ textTransform: 'capitalize',marginTop:'40px' }} color="inherit" href="/privacy">Privacy Policy</Button>
        <Button style={{ textTransform: 'capitalize',marginTop:'40px' }} color="inherit" onClick={scrollToTop}>Back to Top</Button>
      </footer>
    </div>
  );
}

export default Footer;
