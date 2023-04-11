import {addPostAC, deletePostAC, profileReducer} from "src/Redux/profile-reducer";


const state = {
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
            message: 'You’re almost done buying your new mattress and getting the best sleep of your life! Remember to enter your payment info to select a delivery date ',
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

it('length of posts should be incremented', () => {
    let action = addPostAC('it-kamasutra.com')

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].message).toBe('it-kamasutra.com')
})

it('message of new post should be correct', ()=>{
 let action = addPostAC('it-kamasutra.com')

    let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe('it-kamasutra.com')
})

it('after deleting length of messages should be decrement', ()=>{
    let action = deletePostAC(1)

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
})

it("after deleting length shouldn't be decrement, if id is incorrect", ()=>{
    let action = deletePostAC(1000)

    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})



