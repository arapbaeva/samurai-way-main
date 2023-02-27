import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    ProfileType,
    updateStatusThunkCreator
} from "../../Redux/profile-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "./ProfileContainerWithParams";
import {Navigate, useNavigate} from "react-router-dom";


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

    shouldComponentUpdate(nextProps: Readonly<ProfileCType>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log('authUserId', this.props.authorizedUserId)
        console.log('nextauthUserId', nextProps.authorizedUserId)
        return false
    }

    componentDidMount() {
        console.log('authUserId', this.props.authorizedUserId)
        let userId = this.props.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
               this.navigate()
            }
        }
        this.props.getUserProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        return <Profile photos={this.props.profile.photos} isAuth={this.props.isAuth} status={this.props.status}
                        updateStatusThunkCreator={this.props.updateStatusThunkCreator}/>;
    }
}

type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
    status: string
    authorizedUserId: string |  number
  }
let MapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profileReducer.profile,
    isAuth: state.auth.isAuth,
    status: state.profileReducer.status,
    authorizedUserId: state.auth.id
})



export default compose<React.ComponentType>(connect(MapStateToProps, {
    getUserProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
}), WithAuthRedirect, withRouter)(ProfileContainer)
