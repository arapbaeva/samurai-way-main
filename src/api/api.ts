import axios from "axios";



export const instance = axios.create({
    withCredentials: true,//https://social-network.samuraijs.com/api/1.0/auth/me
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": " d8bb2236-9c1d-450b-a38b-3d8339a48b7d"
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
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logOut() {
        return instance.delete(`auth/login`)
    },
    getUserProfile(userId: string) {
        console.warn("Obsolete method. Please use profileAPI object")
        return profileAPI.getUserProfile(userId)
    }
}
export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/${userId ? userId : '2'}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photos:FormData) {
        return instance.put(`/profile/photo`, photos)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<CaptchaType>(`/security/get-captcha-url`)
    }
}

type CaptchaType = {
    url: string
}

export type PhotosType = {
    small?: string
  large?: string
}






