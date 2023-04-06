import React, {MouseEventHandler} from 'react';
import s from './Header.module.css'
import FadeMenu from "../../MaterialUI/Dashboard/DashBoard";


type HeaderType = {
    isAuth: boolean
    login: string
    logOut: MouseEventHandler<HTMLButtonElement> | undefined
}
export const Header = (props: HeaderType) => {
    return (
        <>
            <header className={s.header}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5V7V2JqjXrsD--ZUnZAWUesPljlYPQiJC9Q&usqp=CAU"
                    alt=""/>
                <span><FadeMenu isAuth={props.isAuth} login={props.login} logOut={props.logOut}/></span>
            </header>

        </>
    );
};

