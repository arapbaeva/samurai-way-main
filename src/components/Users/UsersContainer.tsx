import {connect} from "react-redux";
import {AppRootStateType} from "../../Redux/redux-store";
import {
    follow,
    setCurrentPage,
    setIsFetchingPreloader,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UserType
} from "../../Redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader";
import {getUsers} from "../../api/api";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type ResponseData = {
    items: UserType[]
    error: string
    likesCount: number
    totalCount: number
}
type UserCType = {
    users: UserType[], pageSize: number
    totalUsersCount: number, currentPage: number, setUsers: (items: UserType[]) => void, unFollow: (userId: number) => void, follow: (userId: number) => void, setCurrentPage: (currentPage: number) => void, setTotalUsersCount: (totalCount: number) => void, isFetching: boolean, setIsFetchingPreloader: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UserCType> {
    componentDidMount() {
        this.props.setIsFetchingPreloader(true)
        getUsers(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.setUsers(data.data.items)
            this.props.setTotalUsersCount(data.data.totalCount)
            this.props.setIsFetchingPreloader(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetchingPreloader(true)
        getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.setUsers(data.data.items)
            this.props.setIsFetchingPreloader(false)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users} totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage} pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged} follow={this.props.follow} unFollow={this.props.unFollow}/>
        </>
    }
}

const MapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
    }
}
export default connect(MapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetchingPreloader
})(UsersContainer)

