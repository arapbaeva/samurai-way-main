import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../img/photo_2022-09-04_20-24-17.jpg";
import {UserType} from "../../Redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    followed: number[]
    users: UserType[]
    followingInProgress: boolean
    unFollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
}
export const Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount / 100; i++) {
        pages.push(i)
    }

    return (
        <>
            <div>
                {pages.map(p => {
                    return (
                        <span onClick={() => props.onPageChanged(p)}
                              className={props.currentPage === p ? s.selected : ''}>{p}</span>
                    )
                })}
            </div>
            {props.users.map(el => {
                return (
                    <div className={s.userWrapper}>
                        <div className={s.avatar}>
                            <span key={el.id}>
                                <NavLink to={'/profile/' + el.id}>
                                      <img className={s.img} src={el.photos.small != null ? el.photos.small : userPhoto}
                                           alt='avatar'/>
                                </NavLink>
                                <div>
                                    {el.followed ?
                                        <button disabled={props.followed.some((id) => id === el.id)} className={s.button} onClick={() => {
                                        props.unFollowThunkCreator(el.id)}}>UnFollow</button>
                                        : <button disabled={props.followed.some((id) => id === el.id)} className={s.button} onClick={() => {props.followThunkCreator(el.id)
                                    }}>Follow</button>}
                                </div>
                            </span>
                        </div>
                        <div className={s.userDesc}>
                            <div>
                                <div>
                                    {el.name}
                                </div>
                                <div>
                                    {el.status}
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
                )
            })}
        </>
    );
}

