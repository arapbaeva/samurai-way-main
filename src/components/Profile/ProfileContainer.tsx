import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    ProfileType,
    updateStatusThunkCreator
} from "src/Redux/profile-reducer";
import {AppRootStateType} from "src/Redux/redux-store";
import {compose} from "redux";
import {WithAuthRedirect} from "src/hoc/withAuthRedirect";
import {useNavigate} from "react-router-dom";
import {withRouter} from "src/components/Profile/ProfileContainerWithParams";


type ProfileCType = {
    getUserProfileThunkCreator: (userId: string) => void
    getStatusThunkCreator: (userId: string) => void
    updateStatusThunkCreator: (status: string) => void
    profile: ProfileType
    params: Record<string, string>
    isAuth: boolean
    status: string
    userId: string
    authorizedUserId: string

}

class ProfileContainer extends React.Component<ProfileCType> {

    navigate = () => {
        const navigate = useNavigate();
        navigate('/login');
    }


    refreshProfile() {
        const {params, authorizedUserId, getUserProfileThunkCreator, getStatusThunkCreator} = this.props
        let userId = params.userId
        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                this.navigate()
            }
        }
        getUserProfileThunkCreator(userId)
        getStatusThunkCreator(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileCType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.params.userId !== prevProps.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        const {profile, isAuth, status, updateStatusThunkCreator} = this.props
        return <Profile photos={profile.photos} isAuth={isAuth} status={status}
                        updateStatusThunkCreator={updateStatusThunkCreator} isOwner={!this.props.params.userId}/>;
    }
}

type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
    status: string
    authorizedUserId: string | number
}
let MapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profileReducer.profile,
    isAuth: state.auth.isAuth,
    status: state.profileReducer.status,
    authorizedUserId: state.auth.auth.data.id
})


export default compose<React.ComponentType>(connect(MapStateToProps, {
    getUserProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
}), WithAuthRedirect, withRouter)(ProfileContainer)
