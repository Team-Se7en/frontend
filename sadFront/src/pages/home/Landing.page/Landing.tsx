import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, Button, Avatar, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useStyles from './Landing.style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

function Landing() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={classes.container}>
      <AppBar position="static" style={{ backgroundColor: '#fff', color: '#1603a5' }}>
        <Toolbar>
        <Avatar src={'src/assets/icons/logo.svg'}  style={{ width:'99px', marginRight: '-2px', marginLeft: '100px', display: isSmallScreen ? 'none' : 'block' }} />
          <Typography align='left' variant="h6" style={{ flexGrow: 1 }}>
            Seven Apply
          </Typography>
          {!isSmallScreen && (
            <>
              <Button color="inherit" component={Link} to="/students" style={{ backgroundColor: 'transparent', textTransform: 'none', marginRight: '20px' }}>
                Students
              </Button>
              <Button color="inherit" component={Link} to="/professors" style={{ backgroundColor: 'transparent', textTransform: 'none', marginRight: '20px' }}>
                Professors
              </Button>
              <Button color="inherit" component={Link} to="/institutions" style={{ backgroundColor: 'transparent', textTransform: 'none', marginRight: '270px' }}>
                Institutions
              </Button>
            </>
          )}
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick} style={{ marginRight: '10px' }}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
          </Menu>
          <Button color="inherit" component={Link} to="/login">
            <AccountCircleIcon style={{ marginRight: '10px' }} />
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup" style={{ marginRight: '100px' }}>
            <AddCircleOutlineIcon style={{ marginRight: '10px' }} />
            Sign up
          </Button>
        </Toolbar>

      </AppBar>
      <div style={{ minHeight: 'calc(100vh - 64px - 56px)' }}>
      </div>
      <div className={classes.footerWrapper}></div>
      <footer className={classes.footer} style={{ color: '#1603a5', padding: '0px 0' }}>
            <Typography align='center' variant="h6" style={{ flexGrow: 1,marginLeft:'-970px' }}>Seven Apply</Typography>
        <Avatar src={'src/assets/icons/logo.svg'}  style={{ width:'99px', marginRight: '-2px', marginLeft: '100px',marginTop:'-37px' ,display: isSmallScreen ? 'none' : 'block' }} />
            <Typography style={{marginLeft:'1110px',marginTop:'-10px'}} variant="h6" gutterBottom>
              Get Social
            </Typography>
            <div>
              <IconButton style={{ textTransform: 'capitalize',marginLeft:'1100px'}} color="inherit" href="https://twitter.com">
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

export default Landing;
