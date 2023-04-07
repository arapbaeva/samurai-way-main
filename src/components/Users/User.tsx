import React from "react";
import s from "./Users.module.css";
import userPhoto from "src/assets/images/default-avatar-profile-icon-of-social-media-user-vector.webp";
import {UserType} from "src/Redux/users-reducer";
import {NavLink} from "react-router-dom";


type PropsType = {
    user: UserType
    followed: number[]
    unFollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
}
export const User = ({user, followed, unFollowThunkCreator, followThunkCreator}: PropsType) => {
    return (
        <>
            <div className={s.userWrapper}>
                <div className={s.avatar}>
                    <span>
                                <NavLink to={'/profile/' + user.id}>
                                      <img className={s.img}
                                           src={user.photos.small != null ? user.photos.small : userPhoto}
                                           alt='avatar'/>
                                </NavLink>

                                <div>
                                    {user.followed ?
                                        <button disabled={followed.some((id) => id === user.id)} className={s.button}
                                                onClick={() => {
                                                    unFollowThunkCreator(user.id)
                                                }}>UnFollow</button>
                                        : <button disabled={followed.some((id) => id === user.id)} className={s.button}
                                                  onClick={() => {
                                                      followThunkCreator(user.id)
                                                  }}>Follow</button>}
                                </div>
                </span></div>
                <div className={s.userDesc}>
                    <div>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.status}
                        </div>
                    </div>
                    <div>
                        <div>
                            {'el.location.country'}
                        </div>
                        <div>
                            {'el.location.city'}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

