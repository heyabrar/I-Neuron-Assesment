import axios from "axios";

export const FetchUsersData = ( ) =>{
    return axios.get(`https://blue-journalist-bbrpv.ineuron.app:4000/users`)
}

export const FetchPostUser = ( ) =>{
    return axios.post(`https://blue-journalist-bbrpv.ineuron.app:4000/user/create`)
}

//GET --> https://blue-journalist-bbrpv.ineuron.app:4000/users
//POST --> https://blue-journalist-bbrpv.ineuron.app:4000/user/create
//PATCH --> https://blue-journalist-bbrpv.ineuron.app:4000/user/:id
//DELETE --> https://blue-journalist-bbrpv.ineuron.app:4000/user/:id