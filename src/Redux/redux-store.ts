import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
//import {sidebarReducer} from "./sidebar-reducer";


export const RootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    usersReducer: usersReducer
    // sidebarReducer
})


export type AppRootStateType =ReturnType<typeof RootReducer>
export const store = createStore(RootReducer)

//@ts-ignore
window.store = store