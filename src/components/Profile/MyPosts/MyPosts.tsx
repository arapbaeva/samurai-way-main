import s from "./MyPost.module.css";
import {Button, TextField} from "@mui/material";
import {Post, PostType} from "./Posts/Post";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import MediaControlCard from "../../../MaterialUI/mediaControlCard/mediaControlCard";
import React from "react";
import {PostsPropsType} from "./Posts/MyPostsContainer";

export const MyPosts = (props: PostsPropsType) => {
    let arrForPosts = props.posts.map((el:PostType, index) => {
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
                            value={props.newPostText}
                            id="outlined-textarea"
                            label="Print post here"
                            placeholder="Placeholder"
                            multiline
                            color="success"
                            size="medium"
                         onChange={props.updateAddPost}
                        />
                        <div className={s.button}>
                            <Button variant="contained" color="success" size="small" onClick={props.addPost}>
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


