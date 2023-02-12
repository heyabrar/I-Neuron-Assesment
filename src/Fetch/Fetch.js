import axios from "axios";

export const FetchUsersData = ( ) =>{
    return axios.get(`https://blue-journalist-bbrpv.ineuron.app:4000/users`)
}

export const FetchPostUser = (payload) =>{
    return axios.post(`https://blue-journalist-bbrpv.ineuron.app:4000/user/create`,payload)
}

export const FetchDeleteUser = (id) =>{
    return axios.delete(`https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`)
}

export const FetchEditUser = (payload,id) =>{
    return axios.patch(` https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`, payload)
}
