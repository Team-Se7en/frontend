// MobileMenu.tsx

import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  showAuthButtons: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose, showAuthButtons }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button component={Link} to="/students" onClick={onClose}>
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem button component={Link} to="/professors" onClick={onClose}>
          <ListItemText primary="Professors" />
        </ListItem>
        <ListItem button component={Link} to="/institutions" onClick={onClose}>
          <ListItemText primary="Institutions" />
        </ListItem>
        {showAuthButtons && (
          <>
            <ListItem button component={Link} to="/login" onClick={onClose}>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/signup" onClick={onClose}>
              <ListItemText primary="Signup" />
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
}

export default MobileMenu;
