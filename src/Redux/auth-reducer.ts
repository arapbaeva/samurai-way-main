import {securityAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunk} from "src/Redux/redux-store";


export type AuthType = {
    data: DataType
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
    logout: string,
}
export type InitialStateType = {
    auth: AuthType
    isAuth: boolean
    captchaUrl:  string | null
}


const initialState: InitialStateType = {
    auth: {
        data: {
            id: '25859',
            email: '',
            login: '',
            logout: ''
        },
        resultCode: 5,
        messages: []
    },
    isAuth: false,
    captchaUrl: ''
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
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
        case  "GET-CAPTCHA-URL-SUCCESS":
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
}


//AC
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
export const getCaptchaUrlSuccess = (captchaUrl: null | string) => {
    return {
        type: "GET-CAPTCHA-URL-SUCCESS",
        captchaUrl
    } as const
}

//thunk
export const getAuthUsersThunkCreator = ():AppThunk => async (dispatch) => {
    let response = await usersAPI.getAuthUsers();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUsersData(response.data.data, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string):AppThunk => async (dispatch) => {
    let response = await usersAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUsersThunkCreator())
    }
    else {
        if(response.data.resultCode=== 10){
            dispatch(getCaptchaUrlC())
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaUrlC = ():AppThunk => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
   const captChaUrl =response.data.url
    dispatch(getCaptchaUrlSuccess(captChaUrl))
}


export const logOut = ():AppThunk => {
    return (dispatch) => {
        usersAPI.logOut().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setOutAuthUsersData(null, false))
            }
        })
    }
}


type ActionsType = ReturnType<typeof setAuthUsersData> | ReturnType<typeof setOutAuthUsersData> | ReturnType<typeof getCaptchaUrlSuccess>




