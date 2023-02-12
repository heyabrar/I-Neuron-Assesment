import axios from "axios";

export const FetchUsersData = ( ) =>{
    return axios.get(`https://blue-journalist-bbrpv.ineuron.app:4000/users`)
}

//GET --> https://blue-journalist-bbrpv.ineuron.app:4000/users
//POST --> https://blue-journalist-bbrpv.ineuron.app:4000/user/create
//PATCH --> https://blue-journalist-bbrpv.ineuron.app:4000/user/:id
//DELETE --> https://blue-journalist-bbrpv.ineuron.app:4000/user/:id