import s from "./Post.module.css";
import * as React from 'react';
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";


export type PostType = {
    id: number
    message: string
    likesCount: number
}
export const Post = (props: PostType) => {
    return (
        <>
            <div className={s.item}>
               <div> <img className={s.image}
                    src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                          alt="logo"/> </div>
                <div>{props.message}</div>
                <div><ThumbUpTwoToneIcon/>{props.likesCount}</div>
            </div>
        </>);
};

