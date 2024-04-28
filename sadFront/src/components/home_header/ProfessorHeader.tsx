import * as React from 'react';

import AdbIcon from '@mui/icons-material/Adb';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const pages = ['Home', 'Positions', 'Requests', 'University'];
const settings = ['Profile', 'Add Program', 'Logout'];

function ProfessorHeader() {
const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
setAnchorElNav(event.currentTarget);
};

const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
setAnchorElUser(null);
};

return (
    <AppBar position="static">
    <Container maxWidth="xl" sx={{ backgroundColor: '#0F1035' }}>
    <Toolbar disableGutters>
        <Typography
        variant="h5"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            backgroundColor: '#0F1035',
        }}
        >
        7Apply
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
            display: { xs: 'block', md: 'none' },
            }}
        >
            {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
            </MenuItem>
            ))}
        </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
        variant="h5"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
            mr: 2,
            display: { xs: 'flex', md: '1' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}
        >
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page, index) => (
            <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', marginLeft: index !== 0 ? 4 : 0 }}
            >
            {page}
            </Button>
        ))}
        </Box>


        <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar sx={{
                            width: 80,
                            height: 80,
                            margin: '1rem',
                            borderRadius: '50%',
                            color: '#bde0fe',
                            backgroundColor: '#03045e',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '48px',
                            fontWeight: 'bold',
                            backgroundImage: 'linear-gradient(135deg, #bde0fe 0%, #03045e 100%)',
                            transition: 'transform 0.3s ease-in-out',
                        }}>

            </Avatar>
            </IconButton>
        </Tooltip>
        <Menu
            sx={{ marginTop: '6rem' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',

            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
            {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
            </MenuItem>

            ))}
        </Menu>
        </Box>
    </Toolbar>
    </Container>
    </AppBar>
    );
    }
    export default ProfessorHeader;




//222222222
// import {
//     AccountCircle as AccountCircleIcon,
//     Adb as AdbIcon,
//     Add as AddIcon,
//     Logout as LogoutIcon,
//     Menu as MenuIcon,
// } from '@mui/icons-material';
// import {
//     AppBar,
//     Avatar,
//     Box,
//     Button,
//     Container,
//     IconButton,
//     Menu,
//     MenuItem,
//     Toolbar,
//     Tooltip,
//     Typography,
// } from '@mui/material';
// import React, { useState } from 'react';

// const pages = ['Home', 'Positions', 'Requests', 'University'];
//     const settings = ['Profile', 'Add Program', 'Logout'];

//     function ProfessorHeader() {
//     const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
//     const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

//     const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//     };

//     const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//     };

//     return (
//     <AppBar position="static">
//         <Container maxWidth="xl" sx={{ backgroundColor: '#0F1035' }}>
//         <Toolbar disableGutters>
//             <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//                 mr: 2,
//                 display: { xs: 'none', md: 'flex' },
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//                 backgroundColor: '#0F1035',
//             }}
//             >
//             7Apply
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//             >
//                 <MenuIcon />
//             </IconButton>
//             <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                 display: { xs: 'block', md: 'none' },
//                 }}
//             >
//                 {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//                 ))}
//             </Menu>
//             </Box>

//             <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, marginRight: 1 }} />
//             <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//                 mr: 2,
//                 display: { xs: 'flex', md: 'none' },
//                 flexGrow: 1,
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//             }}
//             >
//             LOGO
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//                 <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//                 >
//                 {page}
//                 </Button>
//             ))}
//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
//                 <Avatar
//                     sx={{
//                         width: 80,
//                         height: 80,
//                         margin: '1rem',
//                         borderRadius: '50%',
//                         color: '#bde0fe',
//                         backgroundColor: '#03045e',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         fontSize: '48px',
//                         fontWeight: 'bold',
//                         backgroundImage: 'linear-gradient(135deg, #bde0fe 0%, #03045e 100%)',
//                         transition: 'transform 0.3s ease-in-out',
//                     }}
//                 >
//                     <AccountCircleIcon />
//                 </Avatar>
//                 </IconButton>
//             </Tooltip>
//             <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'right',
//                 }}
//                 keepMounted
//     transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//                 sx={{ marginTop: '0.5rem' }}
//             >
//                 {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography>{setting}</Typography>
//                 </MenuItem>
//                 ))}
//             </Menu>
//             </Box>
//         </Toolbar>
//         </Container>
//     </AppBar>
//     );
//     }

// export default ProfessorHeader;