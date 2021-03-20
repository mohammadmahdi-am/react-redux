import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"
import axios from 'axios'
export const fetchUsersRequest = () =>{
    return {
        type :FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type : FETCH_USER_SUCCESS,
        payload : users
    }
}

export const fetchUsersFailure = error =>{
    return{
        type : FETCH_USER_FAILURE,
        paload : error
    }
}

export const fetchUsers = () =>{
    
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            const users = res.data
            dispatch(fetchUsersSuccess(users.map(user=>user.id)))
        })
        .catch(err=>{
            const errmsg = err.message
            dispatch(fetchUsersFailure(errmsg))
        })
        

    }
}