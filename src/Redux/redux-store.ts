import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
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

export const store = legacy_createStore(RootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

//@ts-ignore
window.store = store