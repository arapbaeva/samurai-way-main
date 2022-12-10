import {useParams} from "react-router-dom";
import ProfileContainer from "./ProfileContainer";
import React from "react";

export const ProfileContainerWithParams = () => {
    const {userId} = useParams()

    return <ProfileContainer userId={userId}/>
}
