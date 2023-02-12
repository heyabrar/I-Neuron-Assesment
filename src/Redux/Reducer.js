import * as types from './ActionTypes';

const InitialState = {
    UsersData: [],
    isLoading: false,
    isError: false
};

export default function Reducer(state = InitialState, action) {
    const { type, payload } = action;
    switch (type) {
        case types.GET_USER_REQUEST: {
            return {
                ...state,
                isLoading: true
            };
        };

        case types.GET_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                UsersData: payload
            };
        };

        case types.GET_USER_FAILURE: {
            return {
                ...state,
                isError: true,
                UsersData: []
            };
        };

        default:
            return state
    };
};