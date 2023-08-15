import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileFormData} from "./ProfileInfo/ProfileDataForm";

export type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string | null,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfilePropsType = {
    profile : ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner:boolean
    savePhoto:(file: File) => void
    saveProfile:(profile: ProfileFormData) => Promise<void>
}
const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;