import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {AppRootStateType} from "../../Redux/redux-store";


type ProfileCType = {
    setUserProfile: (profile: any) => void
    profile: ProfileType
    userId?: string
}

class ProfileContainer extends React.Component<ProfileCType> {
    componentDidMount() {
        const userId = this.props.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : '2'}`).then(response => {
            this.props.setUserProfile(response.data)
            console.log(response.data)
        })
    }
    render() {
        return <Profile photos={this.props.profile.photos}/>;
    }
}
type MapStateToPropsType = {
    profile: ProfileType
}
let MapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profileReducer.profile
})

export default connect(MapStateToProps, {setUserProfile})(ProfileContainer);
