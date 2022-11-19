import s from "./MyPost.module.css";
import {Button, TextField} from "@mui/material";
import {Post, PostType} from "./Posts/Post";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import MediaControlCard from "../../../MaterialUI/mediaControlCard/mediaControlCard";
import React, {ChangeEvent} from "react";
import {ActionsTypes} from "../../../Redux/store";
import {addPostAC, updatePostAC} from "../../../Redux/profile-reducer";

type MyPostsType = {
    posts: PostType[]
    // addPost: ()=> void
    // updateAddPost: (newPostText: string)=>void
    dispatch: (action: ActionsTypes) => void
    postText: string
    newPostText: string
}

export const MyPosts = (props: MyPostsType) => {

    // let newPostElement = React.createRef<HTMLTextAreaElement>() 32-lesson

    const addPost = () => {
   // props.addPost(props.newPostText)
        props.dispatch(addPostAC())
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updatePostAC(e.currentTarget.value))
        // props.dispatch({type: "UPDATE-ADD-POST", newPostText: e.currentTarget.value})

    }

    let arrForPosts = props.posts.map((el, index) => {
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

                        <TextField
                            id="outlined-textarea"
                            label="Print post here"
                            placeholder="Placeholder"
                            multiline
                            color="success"
                            size="medium"
                         onChange={onChangeInputHandler}
                        />
                        <div className={s.button}>
                            <Button variant="contained" color="success" size="small" onClick={addPost}>
                                Add Post
                            </Button>
                        </div>

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


