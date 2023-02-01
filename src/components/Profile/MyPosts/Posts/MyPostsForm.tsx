import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import s from "../MyPost.module.css";
import {maxLengthCreator, required} from "../../../../Utils/validators/validators";
import {TextArea} from "../../../../common/FormControls";

export type AddPostFormType = {
    textarea: string
    newPostBody: string
}
const maxLength = maxLengthCreator(10)
export const MyPostsForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={TextArea}
                name="newPostBody"
                placeholder="Placeholder"
                validate={[required, maxLength]}
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