import * as React from 'react';
import {MouseEventHandler} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

type FadeMenuType = {
    isAuth: boolean
    login: string
    logOut:MouseEventHandler<HTMLButtonElement> | undefined
}

export default function FadeMenu(props: FadeMenuType) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const dispatch = useDispatch()
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Dashboard
            </Button>
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem>{props.isAuth ?<div>{props.login} - <button onClick={props.logOut}>LogOut</button></div>  : <NavLink to={'/login'}>Login</NavLink>}</MenuItem>
            </Menu>
        </div>
    );
}
