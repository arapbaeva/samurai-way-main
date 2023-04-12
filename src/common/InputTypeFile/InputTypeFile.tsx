import React, {ChangeEvent, useState} from 'react';
import {IconButton} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import defaultAva from 'src/assets/images/default-avatar-profile-icon-of-social-media-user-vector.webp'
import {useAppDispatch} from "src/Redux/redux-store";
import {savePhotoSuccessThunkCreator} from "src/Redux/profile-reducer";
import {PhotosType} from "src/api/api";



export const InputTypeFile = (props: { photos: PhotosType }) => {

    const [ava, setAva] = useState(defaultAva)
    const [isAvaBroken, setIsAvaBroken] = useState(false)
    const dispatch = useAppDispatch()

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            const formdata = new FormData()
            formdata.append('image', file)
            dispatch(savePhotoSuccessThunkCreator(formdata))
            setAva(props.photos.large || defaultAva)
        }
    }

    const errorHandler = () => {
        setIsAvaBroken(true)
        alert('Кривая картинка')
    }

    return (
        <div>
            <img
                src={props.photos.large ? props.photos.large : defaultAva}
                onError={errorHandler}
                alt="ava"
            />
            <label>
                <input type="file"
                       onChange={uploadHandler}
                       style={{display: 'none'}}
                />
                <IconButton component="span">
                    <CloudUploadIcon/>
                </IconButton>
            </label>
        </div>
    )
}
