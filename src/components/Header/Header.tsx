import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {AllPropsType} from "./HeaderContainer";
import ava from '../../assets/imges/myPhoto.png'
import {useAppSelector} from "src/redux/redux-store";


const Header = (props:AllPropsType) => {
    const profile = useAppSelector(state=>state.profilePage.profile)
    return (
        <header className={s.header}>
            { <img src={profile.photos.large || ava} alt="photo"/>}

            <div className={s.loginBlock}>
                { props.isAuth ?
                    <div className={s.loginText} >{props.login} - <button onClick={()=>{
                        props.logout()
                    }
                    }>Log out</button> </div>
                   : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;