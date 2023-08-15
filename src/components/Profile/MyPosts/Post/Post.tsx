import React from "react";
import s from './Post.module.css';

type PropsType = {
    message: string
    likesCount: number
}

const Post = (props: PropsType) => {

    return (
        <div className={s.item}>
            <img className={s.image} alt="logo"src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
            {props.message}
            <div>
                <span>{String.fromCodePoint(0x1F497)}</span> {props.likesCount}
            </div>
        </div>
    )
};

export default Post;