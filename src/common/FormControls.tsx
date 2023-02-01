import {WrappedFieldInputProps, WrappedFieldMetaProps} from "redux-form";
import {HTMLInputTypeAttribute} from "react";
import style from './FormControls.module.css'

type FormsControlsType = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    placeholder?: string
    type?: HTMLInputTypeAttribute
    autoFocus?: boolean
    child: any
    element: any
}

export  const FormControls = (props:FormsControlsType) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={style.formControl + " " + (hasError ?  style.error : "") }>
            <div>
              <props.element  {...props.input} {...props}/>
            </div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    )
}

export const TextArea = (props:FormsControlsType) => {//пропсы будут содержать все, кроме инпута и мета
    return <FormControls {...props} element = {"textarea"}></FormControls>
}

export const Input = (props:FormsControlsType) => {
return <FormControls {...props} element = {"input"}></FormControls>
}


