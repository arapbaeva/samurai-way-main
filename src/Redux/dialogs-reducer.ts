export type MessageType = {
    id: number
    message: string
}
export type DialogsDataType = {
    id: number
    name: string
}
export type InitialStateType = typeof initialState

const initialState = {
    newMessageText: '',
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Aiym'},
        {id: 3, name: 'Nurai'}
    ] as Array<DialogsDataType>,
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'What kind?'}
    ] as Array<MessageType>
}

type ActionDialogsType = | ReturnType<typeof addMessageAC>

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionDialogsType): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessageText: MessageType = {
                id: new Date().getTime(),
                message: action.newMessageBody
            }
            return {...state, messages: [...state.messages, newMessageText]};
        default:
            return state
    }
}

export const addMessageAC = (newMessageBody: string) => {
    return {
        type: "ADD-MESSAGE",
        newMessageBody: newMessageBody
    } as const
}


//после каждого кейса нужно breakнуть кейс, но при каждом ретёрне стейта кейс автоматически брейкнется.