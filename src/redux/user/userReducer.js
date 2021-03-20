import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

const initialState = {
    loading : false,
    users : [],
    error : false
}


const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading : true
            }
        case FETCH_USER_SUCCESS:
            return{
                error : '',
                loading:true,
                users : action.payload
            }    
        case FETCH_USER_FAILURE:
            return{
                loading : false,
                users : [],
                error : action.payload
            
            }  
        default:return state      
    }

}


export default userReducer