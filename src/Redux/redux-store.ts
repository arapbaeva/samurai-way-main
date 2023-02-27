import {applyMiddleware, combineReducers, createStore, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-reducer";


export const RootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    usersReducer: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
    // sidebarReducer
})


export type AppRootStateType =ReturnType<typeof RootReducer>
export const store = legacy_createStore(RootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store