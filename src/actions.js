import {
    GET_USERS_BY_ID_REQUEST,
    GET_USERS_BY_ID_SUCCESS,
    GET_USERS_BY_ID_FAIL,
} from "./constants";

import {
    getUsers,
} from "./api";

import store from './store';


const getUserById = async (id) => {
    //Complete this function

    getUsers(id)
        .then((resp)=>{
            store.dispatch({type : GET_USERS_BY_ID_REQUEST});
            store.dispatch({type : GET_USERS_BY_ID_SUCCESS, payload : resp});
        })
        .catch((err)=>{
            store.dispatch({type : GET_USERS_BY_ID_FAIL, payload : err.message})
        })
};

export default getUserById




