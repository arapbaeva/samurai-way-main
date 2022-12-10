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



