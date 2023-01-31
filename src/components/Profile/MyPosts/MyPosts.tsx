import s from "./MyPost.module.css";
import {Button, TextField} from "@mui/material";
import {Post, PostType} from "./Posts/Post";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import MediaControlCard from "../../../MaterialUI/mediaControlCard/mediaControlCard";
import React from "react";
import {PostsPropsType} from "./Posts/MyPostsContainer";
import {Field, reduxForm} from "redux-form";
import {AddMessageForm, AddMessageFormType} from "../../Dialogs/Messages/AddMessageForm";
import {AddPostFormType, AddPostsReduxForm} from "./Posts/MyPostsForm";
import {addPostAC} from "../../../Redux/profile-reducer";


export const MyPosts = (props: PostsPropsType) => {

    const onSubmit = (values: AddPostFormType) => {
        props.addPost(values.newPostBody)
    }
    let arrForPosts = props.posts.map((el: PostType, index) => {
        return (
            <div className={s.Posts} key={index}>
                <Post id={el.id} message={el.message} likesCount={el.likesCount}/>
            </div>
        )
    })

    return (
        <>
            <div>
                <div>
                    My Posts
                    <div className={s.addPosts}>
                        <AddPostsReduxForm onSubmit={onSubmit}/>
                        <div className={s.mediaControlCard}>< MediaControlCard/></div>
                    </div>
                    {arrForPosts}
                    <AvatarGroup total={24}>
                        <Avatar alt="Remy Sharp"
                                src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg"/>
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg"/>
                    </AvatarGroup>
                </div>
            </div>
        </>
    );
};

