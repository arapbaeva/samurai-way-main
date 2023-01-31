import React, {ChangeEvent} from "react";
import {addPostAC, PostsType, updatePostAC} from "../../../../Redux/profile-reducer";
import {MyPosts} from "../MyPosts";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../../Redux/redux-store";

type MapStatePropsType = {
    posts: PostsType[]
    postText: string
    newPostText: string
}
type MapDispatchPropsType = {
    addPost: (newPostBody: string)=>void
}
export type PostsPropsType = MapStatePropsType & MapDispatchPropsType


const MapStateToProps = (state: AppRootStateType):MapStatePropsType => {
    return {
        posts: state.profileReducer.posts,
        postText: state.profileReducer.postText,
        newPostText: state.profileReducer.newPostText
    }
}


const MapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addPost: (newPostBody:string) => {
            dispatch(addPostAC(newPostBody))
        }
    }
}

export const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)




