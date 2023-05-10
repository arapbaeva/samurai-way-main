import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {NavLink} from "react-router-dom";
import {HeaderType} from "src/components/Header/Header";
import ProfileContainer from "src/components/Profile/ProfileContainer";
import {Profile} from "src/components/Profile/Profile";


export default function FadeMenu({isAuth, login, logOut}: HeaderType) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="btn btn-primary"
            >
                Dashboard
            </button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}><NavLink to={"/profile"}  >Profile</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to={"/dialogs"} >Messages</NavLink></MenuItem>
                <MenuItem>{isAuth ?<div>{login}<button onClick={logOut} className="btn">LogOut</button></div>  : <NavLink to={'/login'}>Login</NavLink>}</MenuItem>
            </Menu>
        </div>
    );
}
