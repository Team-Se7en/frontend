import * as React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the AccountCircle icon
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import LogoutIcon from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { ProfessorMenus } from 'models/ProfessorMenus';

export interface AccountMenuProps {
    menuChange: (menu: ProfessorMenus) => void;
}

export default function AccountMenu(props: AccountMenuProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [activeMenu, setActiveMenu] = useState(ProfessorMenus.RecentPositions);
    const handleMenuChange = (event: SelectChangeEvent) => {
        setActiveMenu(event.target.value as ProfessorMenus);
        props.menuChange(activeMenu);
    }

    return (
        <React.Fragment>
            <Box sx={{ backgroundColor: '#0F1035' }}>

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

                <Select variant='outlined' value={activeMenu} onChange={handleMenuChange} sx={{ width: '15rem', backgroundColor: 'white'}}>
                        <MenuItem value={ProfessorMenus.RecentPositions}>{ProfessorMenus.RecentPositions}</MenuItem>
                        <MenuItem value={ProfessorMenus.RecentRequests}>{ProfessorMenus.RecentRequests}</MenuItem>
                        <MenuItem value={ProfessorMenus.Programs}>{ProfessorMenus.Programs}</MenuItem>
                </Select>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}


            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <AccountCircleIcon fontSize="small" sx={{ color: '#03045e' }} />
                    </ListItemIcon>
                    Profile
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <AddIcon fontSize="small" sx={{ color: '#03045e' }} />
                    </ListItemIcon>
                    Add program
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" sx={{ color: '#03045e' }} />
                    </ListItemIcon>
                    Logout
                </MenuItem>

            </Menu>
        </React.Fragment>
    );
}
