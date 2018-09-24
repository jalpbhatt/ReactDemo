import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const NavMenu = (props) => {
    const { anchorEl, navigateToHome, navigateToLoginOnLogoutClick, handleClose } = props;

    return (
        <div>
            <Menu
                id="nav-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={navigateToHome}>Home</MenuItem>
                <MenuItem onClick={navigateToLoginOnLogoutClick}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default NavMenu;
