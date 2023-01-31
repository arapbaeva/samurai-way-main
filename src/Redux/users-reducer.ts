import {usersAPI} from "../api/api";
import {setAuthUsersData} from "./auth-reducer";

type LocationType = {
    country: string
    city: string
}
export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    photos: {
        small: string
    }
}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false
}

export const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.id) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.id) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case "SET-USERS":
            return {
                ...state, users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage //меняем пейж на текущую стр. При клике получаем текущую стр. bold
            }
        case  "SET-TOTAL-USERS-COUNT":
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case "IS_FETCHING_PRELOADER":
            return {
                ...state, isFetching: action.isFetching
            }
        case "IS_FOLLOWING_DISABLED":
            return {
                ...state, followingInProgress: action.isFetching
            }
        default:
            return state;
    }
}
export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        id: userId

    } as const
}
export const unFollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        id: userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalCount: totalCount
    } as const
}
export const setIsFetchingPreloader = (isFetching: boolean) => {
    return {
        type: "IS_FETCHING_PRELOADER",
        isFetching: isFetching
    } as const
}
export const setIsFollowingDisabled = (isFetching: boolean) => {
    return {
        type: "IS_FOLLOWING_DISABLED",
        isFetching
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {      //getUsersThunkCreator - создатель санки
    return (dispatch: any) => {
        dispatch(setIsFetchingPreloader(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.data.items))
            dispatch(setTotalUsersCount(data.data.totalCount))
            dispatch(setIsFetchingPreloader(false))
        })
    }
}

export const followThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        dispatch(setIsFollowingDisabled(true))
        usersAPI.follow(userId).then(response => {
            response.data.resultCode === 0 && dispatch(follow(userId))
            dispatch(setIsFollowingDisabled(false))
        })
    }
}
export const unFollowThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        dispatch(setIsFollowingDisabled(true))
        usersAPI.unFollow(userId)
            .then(response => {
                response.data.resultCode === 0 && dispatch(unFollow(userId))
                dispatch(setIsFollowingDisabled(false))
            })
    }
}