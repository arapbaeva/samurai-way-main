import React from "react";
import {UserType} from "src/Redux/users-reducer";
import {Paginator} from "src/common/pagination/Paginator";
import {User} from "src/components/Users/User";

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
export const Users = ({
                          totalUsersCount,
                          pageSize,
                          onPageChanged,
                          currentPage,
                          followed,
                          followThunkCreator,
                          unFollowThunkCreator,
                          users
                      }: UsersType) => {
    return (
        <>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                       onPageChanged={onPageChanged} currentPage={currentPage}/>

            {users.map(el => <User key={el.id} user={el} followThunkCreator={followThunkCreator}
                                   followed={followed} unFollowThunkCreator={unFollowThunkCreator}/>)}

        </>
    );
}


