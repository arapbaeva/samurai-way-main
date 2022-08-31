import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType, updateNewPostText} from "../../State";

type ProfilePropsType = {
    posts: Array<PostsType>
    addPostCallBack: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string)=> void
}


export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPostCallBack={props.addPostCallBack} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}