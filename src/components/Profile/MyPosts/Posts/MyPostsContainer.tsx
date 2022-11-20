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
    addPost: ()=>void
    updateAddPost: (e: ChangeEvent<HTMLTextAreaElement>)=> void
}
export type PostsPropsType = MapStatePropsType & MapDispatchPropsType


const mapStateToProps = (state: AppRootStateType):MapStatePropsType => {
    return {
        posts: state.profileReducer.posts,
        postText: state.profileReducer.postText,
        newPostText: state.profileReducer.newPostText
    }
}


const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateAddPost: (e: ChangeEvent<HTMLTextAreaElement>) => {
         dispatch(updatePostAC(e.currentTarget.value))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


