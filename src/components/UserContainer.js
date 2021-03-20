import React ,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux'

function UserContainer(props) {
    useEffect(()=>{
        props.fetchUsers()
    },[])

    return (
        <div>
            {props.userData.loading ? props.userData.users.map(user=>(<h2>{user}</h2>)) : (<h2>failed</h2>)}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        userData : state.user
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchUsers : (number) => dispatch(fetchUsers())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
