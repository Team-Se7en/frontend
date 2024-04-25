import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Hidden, Button, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import useStyles from './navbar-styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MobileMenu from "./MobileMenu";

function Navbar({ showAuthButtons = false }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:960px)');

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={classes.container}>
      <AppBar position="fixed" style={{ backgroundColor: '#0F1035', color: '#FFF5EE' }}>
        <Toolbar>
          <Typography align='left' variant="h6" style={{ flexGrow: 1,marginLeft:'100px' }}>
            7Apply
          </Typography>

          {isMobile ? (
            <Hidden mdUp>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen} style={{ marginRight: '10px' }}>
                <MenuIcon />
              </IconButton>
              <MobileMenu open={drawerOpen} onClose={handleDrawerClose} showAuthButtons={showAuthButtons} />
            </Hidden>
          ) : (
            <Hidden smDown>
              <Grid container spacing={2}>
                <Grid item>
                  <Button color="inherit" component={Link} to="/students" style={{ backgroundColor: 'transparent', textTransform: 'none',marginLeft: '130px'   }}>
                    Students
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="inherit" component={Link} to="/professors" style={{ backgroundColor: 'transparent', textTransform: 'none',marginLeft: '10px'  }}>
                    Professors
                  </Button>
                </Grid>
                <Grid item>
                  <Button color="inherit" component={Link} to="/institutions" style={{ backgroundColor: 'transparent', textTransform: 'none',marginLeft: '10px'  }}>
                    Institutions
                  </Button>
                </Grid>
              </Grid>
            </Hidden>
          )}
          {showAuthButtons && !isMobile && (
            <>
              <Button style={{ marginLeft: '-350px' }} color="inherit" component={Link} to="/login">
                <AccountCircleIcon style={{ marginRight: '10px' }} />
                Login
              </Button>
              <Button style={{ marginRight: '140px' }} color="inherit" component={Link} to="/signup">
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
