import {useReducer} from 'react'
import UserContext from './UserContext'
import UserReducer from './UserReducer'
import clientAxios from './../config/Axios'

const UserState = (props) => {
    const initialState = {
        users:[]
    }

    const[globalState, dispatch] = useReducer(useReducer, initialState)
    const readUser = async () => {
        const {first_name, last_name, email} = data
        try {
            const res = await clientAxios.get("/users",{
                first_name,
                last_name,
                email
            })
            dispatch({
                type: "READ_USERS",
                payload : res.data,
            })
        } catch (error) {
            console.log(error);
        }
    }

    const readUsers = async () => {
        try {
            const res = await clientAxios.get("users")
            dispatch({
                type: "READ_USERS",
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <UserContext.Provider
            value={{
                users: globalState.users,
                addUser,
                readUser,
            }}
        >
        {props.children}
        </UserContext.Provider>
    )
}

export default UserState