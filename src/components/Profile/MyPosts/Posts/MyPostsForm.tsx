import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import s from "../MyPost.module.css";

export type AddPostFormType = {
    textarea: string
    newPostBody: string
}

export const MyPostsForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component="textarea"
                name="newPostBody"
                placeholder="Placeholder"
                label="Print post here"
            />
            <div className={s.button}>
                <button>
                    Add Post
                </button>
            </div>
        </form>

    )

}

export const AddPostsReduxForm = reduxForm<AddPostFormType>({form: 'addPost'})(MyPostsForm)