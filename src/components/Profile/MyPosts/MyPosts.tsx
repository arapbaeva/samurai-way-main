import React from "react";
import s from "./MyPosts.module.css";
import {PostsType} from "../../../State";
import {Post} from "./Post/Post";


type MyPostPropsType = {
    posts: Array<PostsType>
    addPostCallBack: (postMessage: string) => void
    newPostText: string
    updateNewPostText: (newText: string)=> void
}
export const MyPosts = (props: MyPostPropsType) => {
    console.log(props.posts)
    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    let onAddPost = () => {
        if (props.newPostText) {
            props.addPostCallBack(props.newPostText)
        }
    }


    const onPostChangeHandler = (newPostText:string) => {
        props.updateNewPostText(newPostText)
    }
    return (
        <>
            <div className={s.postsBlock}>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea onChange={(event) => onPostChangeHandler(event.currentTarget.value)} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add Post
                        </button>
                    </div>
                    <button>remove</button>
                </div>
                <div className={s.posts}>
                    {postElements}

                </div>
            </div>
        </>
    )
}