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
        axios.get<ResponseData>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setIsFetchingPreloader(false)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetchingPreloader(true)
        axios.get<ResponseData>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
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

