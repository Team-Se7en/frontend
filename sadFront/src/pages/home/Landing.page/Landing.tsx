import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import useStyles from './Landing.style';

function Landing() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();

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
    <div>
      <AppBar position="static" style={{ backgroundColor: '#1603a5', color: '#fff' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Avatar className={classes.avatar}></Avatar>
          <Typography align='right' variant="h6" style={{ flexGrow: 1 }}>
            Seven Apply
          </Typography>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to="/login">Login</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/signup">Signup</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div style={{minHeight: 'calc(100vh - 64px - 56px)',}}>
      </div>
      <footer className={classes.footer} style={{ color: '#fff', padding: '20px 0' }}>
        <Typography variant="body1" style={{ textTransform: 'capitalize' }}>Phone: 123456789</Typography>
        <Typography variant="body1" style={{ textTransform: 'capitalize' }}>Email: example@example.com</Typography>
        <Button style={{ textTransform: 'capitalize' }} color="inherit" href="https://facebook.com">Facebook</Button>
        <Button style={{ textTransform: 'capitalize' }} color="inherit" href="https://twitter.com">Twitter</Button>
        <Button style={{ textTransform: 'capitalize' }} color="inherit" href="https://instagram.com">Instagram</Button>
        <Button style={{ textTransform: 'capitalize' }} color="inherit" href="https://linkedin.com">LinkedIn</Button>
        <Button style={{ textTransform: 'capitalize' }} color="inherit" href="/terms">Terms of Use</Button>
        <Button style={{ textTransform: 'capitalize' }} color="inherit" href="/privacy">Privacy Policy</Button>
        <Button style={{ textTransform: 'capitalize' }} color="inherit"  onClick={scrollToTop}>Back to Top</Button>
      </footer>
    </div>
  );
}

export default Landing;
