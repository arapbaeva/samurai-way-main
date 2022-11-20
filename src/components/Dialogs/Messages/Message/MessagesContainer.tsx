import React, {ChangeEvent} from 'react'
import {Messages} from "../Messages";
import {addMessageAC, updateMessageAC} from "../../../../Redux/dialogs-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../../Redux/redux-store";
import {MessageType} from "./Message";

type MapStatePropsType = {
    message: string
    messages: Array<MessageType>
}

type MapDispatchPropsType = {
    addMessage:()=>void
    updateMessage:(e: ChangeEvent<HTMLTextAreaElement>)=>void
}
export type PostsPropsType = MapStatePropsType & MapDispatchPropsType
const MapStateToProps= (state: AppRootStateType): MapStatePropsType=>{
  return {
      message: state.dialogsReducer.newMessageText,
      messages: state.dialogsReducer.messages
  }
}

const MapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
     return {
         addMessage: ()=>{
             dispatch(addMessageAC())
         },
         updateMessage: (e: ChangeEvent<HTMLTextAreaElement>)=> {
             dispatch(updateMessageAC(e.currentTarget.value))
         }
     }
}

export const MessagesContainer = connect(MapStateToProps, MapDispatchToProps)(Messages)


