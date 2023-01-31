import {profileAPI, usersAPI} from "../api/api";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string
    large: string
}
export type InitialStateType = {
    newPostText: string
    postText: string
    posts: Array<PostsType>
    profile: ProfileType
    status: string
}

const initialState: InitialStateType = {
    newPostText: '',
    postText: '',
    posts: [
        {
            id: 1,
            message: 'Happy Monday Laura! I have good news, the shoes you inquired about are back in stock in your size. I set a pair aside for you to come pick up this week.',
            likesCount: 12
        },
        {
            id: 2,
            message: 'You’re almost done buying your new mattress and getting the best sleep of your life! Remember to enter your payment info to select a delivery date http://sleepcushy.com/',
            likesCount: 25
        },
        {
            id: 3, message: 'Hi Joe, thank you for taking the time for a call today. ', likesCount: 17
        }
    ],
    profile: {
        userId: 2,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: 'Bolot Sam',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: ''
        },
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
}
type ActionProfileType = ReturnType<typeof setUserProfile> | ReturnType<typeof addPostAC>
    | ReturnType<typeof updatePostAC> | ReturnType<typeof setStatus>


export const profileReducer = (state: InitialStateType = initialState, action: ActionProfileType): InitialStateType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.addPostBody,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state;
    }
}

export const addPostAC = (addPostBody:string) => {
    return {
        type: "ADD-POST",
        addPostBody: addPostBody
    } as const
}

export const updatePostAC = (newPostText: string) => {
    return {
        type: "UPDATE-ADD-POST",
        newPostText: newPostText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: "SET-STATUS",
        status: status
    } as const
}

export const getUserProfileThunkCreator = (userId: string) => {
    return (dispatch: any) => {
        usersAPI.getUserProfile(userId).then(response => {
           dispatch(setUserProfile(response.data))
        })
    }
}

export const getStatusThunkCreator = (userId: string) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatusThunkCreator = (status: string) => {
    return (dispatch: any) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }

        })
    }
}
