import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, Button, Grid, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useStyles from './navbar-styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Navbar({ showAuthButtons = false }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.container}>
      <AppBar position="static" style={{ backgroundColor: '#0F1035', color: '#FFF5EE' }}>
        <Toolbar>
          <Typography align='left' variant="h6" style={{ flexGrow: 1,marginLeft:'110px' }}>
            7Apply
          </Typography>

          {/* Hidden for small screens, Grid for large screens */}
          <Hidden smDown>
            <Grid container spacing={2}>
              <Grid item>
                <Button color="inherit" component={Link} to="/students" style={{ backgroundColor: 'transparent', textTransform: 'none',marginLeft:'370px' }}>
                  Students
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" component={Link} to="/professors" style={{ backgroundColor: 'transparent', textTransform: 'none' }}>
                  Professors
                </Button>
              </Grid>
              <Grid item>
                <Button color="inherit" component={Link} to="/institutions" style={{ backgroundColor: 'transparent', textTransform: 'none' }}>
                  Institutions
                </Button>
              </Grid>
            </Grid>
          </Hidden>

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
          {showAuthButtons && (
            <>
              <Button style={{marginRight:'20px'}} color="inherit" component={Link} to="/login">
                <AccountCircleIcon style={{ marginRight: '5px' }} />
                Login
              </Button>
              <Button style={{marginRight:'110px'}} color="inherit" component={Link} to="/signup">
                <AddCircleOutlineIcon style={{ marginRight: '5px' }} />
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
