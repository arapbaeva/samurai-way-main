import {usersAPI} from "../api/api";
import {AppThunk} from "src/Redux/redux-store";
import {Dispatch} from "redux";
import {updateObjectInArray} from "src/Utils/updateObjectInArray";

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
    followed: number[]
    followingInProgress: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followed: [],
    followingInProgress: false
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
               users:  updateObjectInArray(state.users, action.id, 'id', {followed:true})
            }
        case "UNFOLLOW":
            return {
                ...state,
                users:  updateObjectInArray(state.users, action.id, 'id', {followed:false})

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
                ...state, followingInProgress: action.isFetching,
                followed: action.isFetching
                    ? [...state.followed, action.userId]
                    : state.followed.filter((id) => id !== action.userId)
            }
        default:
            return state;
    }
}

//AC
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
export const setIsFollowingDisabled = (isFetching: boolean, userId: number) => {
    return {
        type: "IS_FOLLOWING_DISABLED",
        isFetching,
        userId
    } as const
}

type SetIsFollowingDisabledType = ReturnType<typeof setIsFollowingDisabled>
type SetIsFetchingPreloaderType = ReturnType<typeof setIsFetchingPreloader>
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
type SetCurrentPageType = ReturnType<typeof setCurrentPage>
type SetUsersType = ReturnType<typeof setUsers>
type UnFollowType = ReturnType<typeof unFollow>
type FollowType = ReturnType<typeof follow>
//
type ActionsType =
    SetIsFollowingDisabledType
    | SetIsFetchingPreloaderType
    | SetTotalUsersCountType
    | SetCurrentPageType
    | SetUsersType
    | UnFollowType
    | FollowType

interface ApiMethodResponse {
    data: {
        resultCode: number;
    }
}

//TC
const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: (userId: number) => Promise<ApiMethodResponse>, actionCreator: (userId: number) => ActionsType) => {
    dispatch(setIsFollowingDisabled(true, userId))
    let res = await apiMethod(userId)
    res.data.resultCode === 0 && dispatch(actionCreator(userId))
    dispatch(setIsFollowingDisabled(false, userId))
}

export const followThunkCreator = (userId: number): AppThunk => async dispatch => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), follow)
}

export const unFollowThunkCreator = (userId: number): AppThunk =>
    async dispatch => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unFollow)
    }


export const getUsersThunkCreator = (currentPage: number, pageSize: number): AppThunk => async dispatch => {
    dispatch(setIsFetchingPreloader(true))
    let res = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(res.data.items))
    dispatch(setTotalUsersCount(res.data.totalCount))
    dispatch(setIsFetchingPreloader(false))
}
