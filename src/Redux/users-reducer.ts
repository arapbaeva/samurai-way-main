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
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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


