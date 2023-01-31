import {useLocation, useNavigate, useParams} from "react-router-dom";
import ProfileContainer from "./ProfileContainer";
import React from "react";
import {NavigateFunction} from "react-router/dist/lib/hooks";
import {Location} from "@remix-run/router";

export interface WithRouterProps {
    location: Location;
    params: Record<string, string>;
    navigate: NavigateFunction;
}

/** @deprecated Use `React Router hooks` instead */
export const withRouter = <Props extends WithRouterProps>(
    Component: React.ComponentType<Props>
) => {
    return (props: Omit<Props, keyof WithRouterProps>) => {
        const location = useLocation();
        const params = useParams();
        const navigate = useNavigate();

        return (
            <Component
                {...(props as Props)}
                location={location}
                params={params}
                navigate={navigate}
            />
        );
    };
};

// export const ProfileContainerWithParams = () => {
//     const {userId} = useParams()
//
//     return <ProfileContainer userId={userId || ''} />
// }
