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


type ProfileCType = {
    getUserProfileThunkCreator: (userId: string) => void
    getStatusThunkCreator: (userId: string) => void
    updateStatusThunkCreator: (status: string) => void
    profile: ProfileType
    params: Record<string, string>
    isAuth: boolean
    status: string
    userId: string

}

class ProfileContainer extends React.Component<ProfileCType> {
    componentDidMount() {
        let userId = this.props.params.userId
        if(!userId) {
            userId = '2'
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
  }
let MapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profileReducer.profile,
    isAuth: state.auth.isAuth,
    status: state.profileReducer.status,
})


// (a: number) => 'hello ' + a
//     (a: number) => ReactElement
//
// /*export default withRouter(connect(MapStateToProps, {getUserProfileThunkCreator})(AuthRedirectComponent));*/

export default compose<React.ComponentType>(connect(MapStateToProps, {
    getUserProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
}), WithAuthRedirect, withRouter)(ProfileContainer)
