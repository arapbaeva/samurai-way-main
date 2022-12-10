import React from 'react';
import {Store} from "redux";
import {PhotosType} from "../../../Redux/profile-reducer";

export type ProfileInfoType = {
    photos: PhotosType
}

export const ProfileInfo = (props:ProfileInfoType) => {
    return (
        <>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1518289646039-3e6c87a5aaf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpbmslMjBhYnN0cmFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""/>
            </div>
            <div>
                <img src={props.photos.large} alt="photo"/>
                ava+desc
            </div>
        </>
    );
};
