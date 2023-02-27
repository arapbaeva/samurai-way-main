import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    follow, followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    setIsFollowingDisabled,
    unFollow, unFollowThunkCreator,
    UserType
} from "../../Redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowed, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followed: number[]
    followingInProgress:boolean
}
type ResponseData = {
    items: UserType[]
    error: string
    likesCount: number
    totalCount: number
}
type UserCType = {
    users: UserType[], pageSize: number
    totalUsersCount: number, currentPage: number, unFollow: (userId: number) => void, follow: (userId: number) => void, setCurrentPage: (currentPage: number) => void,  isFetching: boolean, setIsFollowingDisabled: (isFetching: boolean)=>void, followingInProgress: boolean, getUsersThunkCreator: (currentPage: number, pageSize: number) => void,  unFollowThunkCreator: (userId: number) => void,
    followed: number[]
    followThunkCreator: (userId: number) => void
}

class UsersContainer extends React.Component<UserCType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users followed={this.props.followed} users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage} pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged} follow={this.props.follow} unFollow={this.props.unFollow}  followingInProgress={this.props.followingInProgress}  unFollowThunkCreator={this.props.unFollowThunkCreator} followThunkCreator={this.props.followThunkCreator}/>
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
    // ,WithAuthRedirect
)(UsersContainer)
