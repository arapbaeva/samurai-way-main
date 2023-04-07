import React from 'react'
import {Messages} from "../Messages";
import {addMessageAC} from "src/Redux/dialogs-reducer";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {AppRootStateType} from "src/Redux/redux-store";
import {MessageType} from "./Message";
import {WithAuthRedirect} from "src/hoc/withAuthRedirect";

type MapStatePropsType = {
    message: string
    messages: Array<MessageType>
    isAuth: boolean
}

type MapDispatchPropsType = {
    addMessage: (newMessageBody: string) => void

}
export type PostsPropsType = MapStatePropsType & MapDispatchPropsType
const MapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        message: state.dialogsReducer.newMessageText,
        messages: state.dialogsReducer.messages,
        isAuth: state.auth.isAuth
    }
}

const MapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageAC(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(connect(MapStateToProps, MapDispatchToProps), WithAuthRedirect)(Messages)

