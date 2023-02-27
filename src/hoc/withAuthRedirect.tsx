import React, {FC} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppRootStateType} from "../Redux/redux-store";

let mapStatePropsForRedirect = (state: AppRootStateType) => ({isAuth: state.auth.isAuth} as MapPropsType)

type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {}

export function WithAuthRedirect<WCP>(WrapperComponent: React.ComponentType<WCP>) {

    const RedirectComponent: FC<MapPropsType & DispatchPropsType> = (props) => {

        let {isAuth, ...restProps} = props;
              if (!isAuth) return <Navigate replace to={'/login'}/>

        return <WrapperComponent {...restProps as WCP}/>
    }

    return connect<MapPropsType,DispatchPropsType, WCP, AppRootStateType>(mapStatePropsForRedirect,{})(RedirectComponent);
}

