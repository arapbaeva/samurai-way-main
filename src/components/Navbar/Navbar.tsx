import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import CenteredElementGrid from "../SideBar/AlignItemsList";


export const Navbar = () => {
    return (
        <>
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className= {s.activeLink}>Profile</NavLink></div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={s.activeLink}>Messages</NavLink></div>
            <div className={s.item}>
                <NavLink to='/users' className={s.activeLink}>Users</NavLink></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>
            <CenteredElementGrid/>
        </div>

</>);
};

