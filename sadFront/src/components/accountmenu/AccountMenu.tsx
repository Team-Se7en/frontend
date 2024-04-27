import * as React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the AccountCircle icon
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';

export default function AccountMenu() {
const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);
const handleClick = (event: React.MouseEvent<HTMLElement>) => {
setAnchorEl(event.currentTarget);
};
const handleClose = () => {
setAnchorEl(null);
navigateToEdit()
};

const navigate = useNavigate();
const navigateToEdit = () => {
    navigate("/professor/editProfile");
}

return (
<React.Fragment>
    <Box sx={{ backgroundColor:'#0F1035'}}>

    <Tooltip title="Account settings">
        <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        >
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
    </Box>
    <Menu
    anchorEl={anchorEl}
    id="account-menu"
    open={open}
    onClose={handleClose}
    onClick={handleClose}
    

    >
    <MenuItem onClick={navigateToEdit}>
    <ListItemIcon>
        <AccountCircleIcon fontSize="small" sx={{ color: '#03045e' }}/>
    </ListItemIcon>
        Profile
    </MenuItem>
    
    <MenuItem onClick={handleClose}>
        <ListItemIcon>
        <AddIcon fontSize="small" sx={{ color: '#03045e' }}/>
        </ListItemIcon>
        Add program
    </MenuItem>
    
    <MenuItem onClick={handleClose}>
        <ListItemIcon>
        <Logout fontSize="small" sx={{ color: '#03045e' }}/>
        </ListItemIcon>
        Logout
    </MenuItem>
    
    </Menu>
</React.Fragment>
);
}
