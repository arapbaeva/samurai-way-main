import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {getAuthUsersThunkCreator} from "./auth-reducer";


export type InitialStateType = {
  initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccessAC = () => ({type:"SET-INITIALIZED"})
export const initializedAppTC = () =>(dispatch: any)=> {
   let promise = dispatch(getAuthUsersThunkCreator());
   Promise.all([promise]) .then(()=>{
        dispatch(initializedSuccessAC())
    })
}




