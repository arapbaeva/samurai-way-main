import {AnyAction, applyMiddleware, combineReducers, compose, createStore, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


export const RootReducer = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    usersReducer: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
    // sidebarReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(RootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


export type AppRootStateType = ReturnType<typeof store.getState>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>

//@ts-ignore
window.store = store