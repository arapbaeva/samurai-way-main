import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return <div className={s.content}>
                <div>
                    <img
                    src="https://images.unsplash.com/photo-1518289646039-3e6c87a5aaf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpbmslMjBhYnN0cmFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""/>
                </div>
            <div>
                ava+desc
            </div>
            <MyPosts/>
    </div>
};

