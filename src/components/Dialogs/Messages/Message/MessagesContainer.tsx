import React, {ChangeEvent} from 'react'
import {Messages} from "../Messages";
import {addMessageAC} from "../../../../Redux/dialogs-reducer";
import {compose, Dispatch} from "redux";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../../Redux/redux-store";
import {MessageType} from "./Message";
import {WithAuthRedirect} from "../../../../hoc/withAuthRedirect";

type MapStatePropsType = {
    message: string
    messages: Array<MessageType>
    isAuth: boolean
}

type MapDispatchPropsType = {
    addMessage:(newMessageBody: string)=>void

}
export type PostsPropsType = MapStatePropsType & MapDispatchPropsType
const MapStateToProps= (state: AppRootStateType): MapStatePropsType=>{
  return {
      message: state.dialogsReducer.newMessageText,
      messages: state.dialogsReducer.messages,
      isAuth: state.auth.isAuth
  }
}

const MapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
     return {
         addMessage: (newMessageBody)=>{
             dispatch(addMessageAC(newMessageBody))
         }
     }
}


//     (props:MapStatePropsType) => {
//     if (!props.isAuth) return  <Navigate replace to="/login" />
//     return <MessagesContainer />
// }

export default compose<React.ComponentType>(connect(MapStateToProps, MapDispatchToProps),WithAuthRedirect)(Messages)

// export const MessagesContainer = connect(MapStateToProps, MapDispatchToProps)(AuthRedirectComponent)
//
// let AuthRedirectComponent: any = WithAuthRedirect(MessagesContainer)



