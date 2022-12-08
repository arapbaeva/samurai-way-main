import {ActionsTypes, ProfilePageType} from "./store";


export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type InitialStateType = {
    newPostText: string
    postText: string
    posts: Array<PostsType>,
    profile: number
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
    profile: 2

}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
                return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case "UPDATE-ADD-POST":
            return {...state, newPostText: action.newPostText}
        // case "SET-USE-PROFILE":
        //     return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const updatePostAC = (newPostText: string) => {
    return {
        type: "UPDATE-ADD-POST",
        newPostText: newPostText
    } as const
}
export const setUserProfile = (profile: number) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}
