import React, {ChangeEvent} from "react";
import {ActionsTypes} from "../../../../Redux/store";
import {PostType} from "./Post";


type MyPostsType = {
    posts: PostType[]
    addPost: ()=> void
    updateAddPost: (newPostText: string)=>void
    dispatch: (action: ActionsTypes) => void
    postText: string
    newPostText: string
}

export const MyPostsContainer = (props: MyPostsType) => {
    const addPost = () => {
   // props.addPost(props.newPostText)
        props.dispatch({type: "ADD-POST"})
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updateAddPost(e.currentTarget.value)
        props.dispatch({type: "UPDATE-ADD-POST", newPostText: e.currentTarget.value})
    }

    return (
        <>
            {/*<MyPosts posts={} addPost={} updateAddPost={()=>} dispatch={} postText={} newPostText={}/>*/}
          </>
    );
};


