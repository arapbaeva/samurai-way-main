import {addPostAC, profileReducer, updatePostAC} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateMessageAC} from "./dialogs-reducer";


export type MessageType = {
    id: number
    message: string
}

export type DialogsDataType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    postText: string
    newPostText: string
    posts: Array<PostsType>
    profile: number
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataType>
    messages: Array<MessageType>
    newMessageText: string
}
type SideBarType = {}

//корневой стейттайп
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SideBarType
}
export type StoreType = {
    _state: RootStateType
    updateAddPost: (newPostText: string) => void
    addPost: () => void
    addMessage: () => void
    updateMessage: (newMessage: string) => void
    subscribe: (callBack: () => void) => void
    _onChange: () => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export type ActionsTypes =
    ReturnType<typeof addPostAC>
| ReturnType<typeof updatePostAC>
| ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateMessageAC>



const store: StoreType = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            newMessageText: '',
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
    },
    updateAddPost(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._onChange()
    },
    addPost() {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: this._state.profilePage.postText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._onChange()
    },
    updateMessage(newMessage: string) {
        this._state.dialogsPage.newMessageText = newMessage
        this._onChange()
    },
    addMessage() {
        const newMessage: MessageType = {
            id: new Date().getTime(),
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe(callBack) {
        this._onChange = callBack
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.sideBar = sidebarReducer()
        this._onChange()
    }}

export default store;