import {getAuthUsersThunkCreator} from "./auth-reducer";
import {AppDispatch} from "src/Redux/redux-store";


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
//AC
export const initializedSuccessAC = () => ({type:"SET-INITIALIZED"})
//TC
export const initializedAppTC = () =>(dispatch: AppDispatch)=> {
   let promise = dispatch(getAuthUsersThunkCreator());
   Promise.all([promise]) .then(()=>{
        dispatch(initializedSuccessAC())
    })
}




