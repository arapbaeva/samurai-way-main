import React from 'react';
import s from "./MyPost.module.css";
import {Button, TextField} from "@mui/material";
import {pink} from '@mui/material/colors';
import {Post} from "./Posts/Post";


//primary={pink[300]}
export const MyPosts = () => {
    return (
        <>
            <div>
                <div>
                    My Posts
                </div>
                <div className={s.addPosts}>
                    <TextField
                        id="outlined-textarea"
                        label="Print post here"
                        placeholder="Placeholder"
                        multiline
                        color="success"
                    />
                    <div className={s.button}>
                        <Button variant="contained" color="success" size="small">
                            Add Post
                        </Button>
                    </div>
                </div>
                <div className={s.Posts}>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </>
    );
};

