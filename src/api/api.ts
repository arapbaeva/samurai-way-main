import axios from "axios";
import {UserType} from "../Redux/users-reducer";

type ResponseData = {
    items: UserType[]
    error: string
    likesCount: number
    totalCount: number
}

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9510e8e0-2145-4a1b-8d6e-e32356d7aeb3"
    }
})
export const getUsers = (currentPage: number,pageSize: number ) => {
    return (
        instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    }))
}


