import React, {MouseEventHandler} from 'react';
import s from './Header.module.css'
import FadeMenu from "../../MaterialUI/Dashboard/DashBoard";
import {useAppSelector} from "src/Redux/redux-store";
import ava from '../../assets/images/default-avatar-profile-icon-of-social-media-user-vector.webp'
import defaultAva from "src/assets/images/default-avatar-profile-icon-of-social-media-user-vector.webp";


export type HeaderType = {
    isAuth: boolean
    login: string
    logOut: MouseEventHandler<HTMLButtonElement> | undefined
}
export const Header = ({isAuth, login, logOut}: HeaderType) => {
    const profile = useAppSelector(state=>state.profileReducer.profile)
    return (
        <>
            <header className={s.header}>
                    { <img src={profile.photos.large || ava} alt="photo"/>}
                {/*<img*/}
                {/*    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5V7V2JqjXrsD--ZUnZAWUesPljlYPQiJC9Q&usqp=CAU"*/}
                {/*    alt=""/>*/}
                <span><FadeMenu isAuth={isAuth} login={login} logOut={logOut}/></span>
            </header>

        </>
    );
};

