import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
//import {sidebarReducer} from "./sidebar-reducer";


export const RootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    usersReducer: usersReducer,
    auth: authReducer
    // sidebarReducer
})


export type AppRootStateType =ReturnType<typeof RootReducer>
export const store = createStore(RootReducer)

//@ts-ignore
window.store = store