import {renderTree} from "./render";


export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>

}
type SideBarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 11}
        ],
        newPostText: 'It-kamasutra'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Aiym"},
            {id: 2, name: "Nurai"},
            {id: 3, name: "Aruke"},
            {id: 4, name: "Dann"},
            {id: 5, name: "Jane"},
            {id: 6, name: "John"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "IT"},
            {id: 3, message: "Kamasutra"},
            {id: 4, message: "I"},
            {id: 5, message: "love"},
            {id: 6, message: "you"}
        ]
    },
    sidebar: {},
}

export let addPost = () => {
    let newPost: PostsType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderTree(state)
}


export default state;

