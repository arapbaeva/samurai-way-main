import {connect} from "react-redux";
import {AppRootStateType} from "src/Redux/redux-store";
import {
    follow, followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    setIsFollowingDisabled,
    unFollow, unFollowThunkCreator,
    UserType
} from "src/Redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowed, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "src/Redux/users-selectors";
import {LinearProgress} from "@mui/material";
import {Preloader} from "src/common/Preloader";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followed: number[]
    followingInProgress: boolean
}
type UserCType = {
    users: UserType[], pageSize: number
    totalUsersCount: number, currentPage: number, unFollow: (userId: number) => void, follow: (userId: number) => void, setCurrentPage: (currentPage: number) => void, isFetching: boolean, setIsFollowingDisabled: (isFetching: boolean) => void, followingInProgress: boolean, getUsersThunkCreator: (currentPage: number, pageSize: number) => void, unFollowThunkCreator: (userId: number) => void,
    followed: number[]
    followThunkCreator: (userId: number) => void
}

class UsersContainer extends React.Component<UserCType> {
    componentDidMount() {
        const {getUsersThunkCreator, currentPage, pageSize} = this.props
        getUsersThunkCreator(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {setCurrentPage, getUsersThunkCreator} = this.props
        setCurrentPage(pageNumber)
        getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        const {
            isFetching,
            followed,
            users,
            totalUsersCount,
            currentPage,
            pageSize,
            follow,
            unFollow,
            followingInProgress,
            unFollowThunkCreator,
            followThunkCreator
        } = this.props
        return <>
            {isFetching ? <Preloader /> : null}
            <Users followed={followed} users={users} totalUsersCount={totalUsersCount}
                   currentPage={currentPage} pageSize={pageSize}
                   onPageChanged={this.onPageChanged} follow={follow} unFollow={unFollow}
                   followingInProgress={followingInProgress}
                   unFollowThunkCreator={unFollowThunkCreator}
                   followThunkCreator={followThunkCreator}/>
        </>
    }
}

const MapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followed: getFollowed(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose<React.ComponentType>(connect(MapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        setIsFollowingDisabled,
        getUsersThunkCreator,
        unFollowThunkCreator,
        followThunkCreator
    })
)(UsersContainer)
