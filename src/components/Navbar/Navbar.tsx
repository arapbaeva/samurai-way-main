import React from 'react';
import s from './Navbar.module.css'
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <Link to='/profile'>Profile</Link></div>
            <div className={`${s.item} ${s.active}`}>
                <Link to="/dialogs">Messages</Link></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
        </nav>
    );
};

