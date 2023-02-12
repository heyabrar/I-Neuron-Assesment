import * as types from './ActionTypes'

export const GetUserRequest = () => {
    return {
        type: types.GET_USER_REQUEST
    }
}

export const GetUserSuccess = (payload) => {
    return {
        type: types.GET_USER_SUCCESS,
        payload
    }
}


export const GetUserFailure = () => {
    return {
        type: types.GET_USER_FAILURE
    }
}