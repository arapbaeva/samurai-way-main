import {ActionsTypes, DialogsPageType} from "./store";


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
    ]as Array<DialogsDataType>,
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'What kind?'}
    ]as Array<MessageType>
}

export const dialogsReducer = (state: InitialStateType = initialState,action:ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessageText: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }
            //state.messages.push(newMessageText)
            //state.newMessageText = ''
            return {...state, messages: [...state.messages, newMessageText], newMessageText: ''};
        case "UPDATE-MESSAGE":
            //state.newMessageText = action.newMessage
            return {...state, newMessageText: action.newMessage};
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}
export const updateMessageAC = (newMessage: string) => {
    return {
        type: "UPDATE-MESSAGE",
        newMessage: newMessage
    } as const
}

//после каждого кейса нужно breakнуть кейс, но при каждом ретёрне стейта кейс автоматически брейкнется.