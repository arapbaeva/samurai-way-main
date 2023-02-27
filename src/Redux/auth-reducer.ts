import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

export type AuthType = {
    data: DataType | null
    resultCode: number
    messages: Array<MessagesType>

}
type MessagesType = {
    messages: ''
}
export type DataType = {
    id: number | string,
    email: string,
    login: string,
}
export type InitialStateType = {
    auth: AuthType
    isAuth: boolean
}

const initialState: InitialStateType = {
    auth: {
        data: {
            id: '25859',
            email: '',
            login: ''
        },
        resultCode: 5,
        messages: []
    },
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA":
            console.log('from reducer ', action.data)
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case
        "SET-OUT-AUTH-USER-DATA"
        :
            console.log('from reducer ', action.data)
            return {
                ...state,
                ...action.data,
                isAuth: false
            }
        default:
            return state;
    }
}

export const setAuthUsersData = (data: DataType | null, isAuth: boolean) => {
    return {
        type: "SET-AUTH-USER-DATA",
        data: data,
        isAuth: isAuth
    } as const
}

export const setOutAuthUsersData = (data: DataType | null, isAuth: boolean) => {
    return {
        type: "SET-OUT-AUTH-USER-DATA",
        data: data,
        isAuth: isAuth
    } as const
}

export const getAuthUsersThunkCreator = () => {
    return (dispatch: any) => {
        usersAPI.getAuthUsers().then(response => {
            console.log('from auth ', response.data.data)
            response.data.resultCode === 0 && dispatch(setAuthUsersData(response.data.data, true))
        })
        return 'it-incubator'
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        usersAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUsersThunkCreator())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}

export const logOut = () => {
    return (dispatch: Dispatch) => {
        usersAPI.logOut().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setOutAuthUsersData(null, false))
            }
        })
    }
}



