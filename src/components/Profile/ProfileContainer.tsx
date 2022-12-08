import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {AppRootStateType} from "../../Redux/redux-store";

type ProfileCType = {
    store: any
    setUserProfile: (profile: any) => void
}

class ProfileContainer extends React.Component<ProfileCType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <Profile  {...this.props}/>;
    }
}

type MapStateToPropsType = {
    profile: number
}
let MapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profileReducer.profile
})

export default connect(MapStateToProps, {setUserProfile})(ProfileContainer);