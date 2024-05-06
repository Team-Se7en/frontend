// MobileMenu.tsx

import React from 'react';
import { Drawer, List, ListItem, ListItemText} from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  showAuthButtons: boolean;
  showAuthButton: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose, showAuthButtons,showAuthButton }) => {
  return (
    <Drawer  anchor="right" open={open} onClose={onClose}>
      <List>
      {showAuthButton && (
        <>
        <ListItem  button component={Link} to="/students" onClick={onClose}>
          <ListItemText  primary="Students" />
        </ListItem>
        <ListItem button component={Link} to="/professors" onClick={onClose}>
          <ListItemText primary="Professors" />
        </ListItem>
        <ListItem button component={Link} to="/institutions" onClick={onClose}>
          <ListItemText primary="Institutions" />
        </ListItem>
        </>
        )}
        {showAuthButtons && (
          <>
          
            <ListItem button component={Link} to="/login" onClick={onClose}>
            <AccountCircleIcon/>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/signup" onClick={onClose}>
            <AddCircleOutlineIcon />
              <ListItemText primary="Signup" />
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
}

export default MobileMenu;
