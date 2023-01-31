import axios from "axios";



export const instance = axios.create({
    withCredentials: true,//https://social-network.samuraijs.com/api/1.0/auth/me
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY":" d8bb2236-9c1d-450b-a38b-3d8339a48b7d"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`))
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

    follow(userId: number) {
        return instance.post(`follow/${userId}`)

    },
    getAuthUsers() {
         return instance.get(`auth/me`)
        // {withCredentials: true}).then(response => {
        //     response.data.resultCode === 0 && this.props.setAuthUsersData(response.data.data)
        //     console.log('data' + response.data.data.login)
        // })
    },
    getUserProfile(userId: string){
       console.warn("Obsolete method. Please use profileAPI object")
        return profileAPI.getUserProfile(userId)
    }
}
// type StatusMessagesType = {
//     messages: string
// }


// export type StatusType = {
//     resultCode: number //1
//     messages: Array<StatusMessagesType>    //['Something wrong'],
//     data: object   // {}
// }

// const status: StatusType = {
//     resultCode: 1,
//     messages: [],
//     data: {}
// }

export const profileAPI = {
    getUserProfile(userId: string){
        return instance.get(`profile/${userId ? userId : '2'}`)
    },
    getStatus(userId: string){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put(`profile/status`, {status})
    }
}







