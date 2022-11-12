import React from 'react';
import s from './Header.module.css'
import MenuListComposition from "../../MaterialUI/Dashboard/DashBoard";
import FadeMenu from "../../MaterialUI/Dashboard/DashBoard";

export const Header = () => {
    return (
        <>
            <header className={s.header}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5V7V2JqjXrsD--ZUnZAWUesPljlYPQiJC9Q&usqp=CAU"
                    alt=""/>
                <span><FadeMenu/></span>
            </header>

        </>
    );
};

