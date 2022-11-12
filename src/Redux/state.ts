import {renderTree} from "../index";

type MessageType = {
    id: number
    message: string
}

type DialogsDataType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePage = {
    newPostText: string
    posts: Array<PostsType>
}

type DialogsPage = {
    dialogsData: Array<DialogsDataType>
    messages: Array<MessageType>
}
type SideBarType = {}

//корневой стейттайп
export type RootStateType = {
    profilePage: ProfilePage
    dialogsPage: DialogsPage
    sideBar: SideBarType
}
export let state: RootStateType = {
    profilePage: {
        newPostText: '',
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
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Aiym'},
            {id: 3, name: 'Nurai'}
        ],
        messages: [
            {id: 1, message: 'Hello!'},
            {id: 2, message: 'Hi!'},
            {id: 3, message: 'What kind?'}
        ]
    },
    sideBar: {}
}

export const addPost = (postText: string) => {
    const newPost: PostsType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    renderTree(state)
}

export const updateAddPost = (newPostText: string) => {
    state.profilePage.newPostText=newPostText
    renderTree(state)
}


export default state;