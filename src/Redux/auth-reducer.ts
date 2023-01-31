import {usersAPI} from "../api/api";

export type AuthType = {
   data: DataType
    resultCode: number
    messages: Array<MessagesType>

}
type MessagesType = {
    messages: ''
}
export type DataType = {
        id: number,
        email: string,
        login: string
}
export type InitialStateType = {
    auth: AuthType
    isAuth: boolean
}

const initialState: InitialStateType = {
    auth: {
        data: {
            id: 5,
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
                return {
                    ...state,
                    ...action.data,
                    isAuth: true
                }
            case "SET-OUT-AUTH-USER-DATA":
                return {
                    ...state,
                    ...action.data,
                    isAuth: false
                }
            default:
                return state;
        }
}

export const setAuthUsersData = (data: DataType) => {
    return {
        type: "SET-AUTH-USER-DATA",
        data: data
    }as const
}

// setOutAuthUsersData({
//     login: '',
//     id : 5,
//     email : ''
// })
export const setOutAuthUsersData = (data: DataType) => {
    return {
        type: "SET-OUT-AUTH-USER-DATA",
        data: data
    }as const
}

export const getAuthUsersThunkCreator = () => {
    return (dispatch: any) => {
        usersAPI.getAuthUsers().then(response => {
            response.data.resultCode === 0 && dispatch(setAuthUsersData(response.data.data))
        })
    }
}



