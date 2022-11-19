import {ActionsTypes, DialogsPageType, MessageType} from "./store";

let initialState: DialogsPageType = {
    newMessageText: '',
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Aiym'},
        {id: 3, name: 'Nurai'}
    ],
    messages: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi!'},
        {id: 3, message: 'What kind?'}
    ]
}

export const dialogsReducer = (state = initialState,action:ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessageText: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText
            }
            state.messages.push(newMessageText)
            state.newMessageText = ''
            return state;
        case "UPDATE-MESSAGE":
            state.newMessageText = action.newMessage
            return state;
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