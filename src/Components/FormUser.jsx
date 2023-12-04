import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import axios from 'axios';

const REACT_APP_BACKEND_URL = "http://localhost:5173/usuarios";

const FormUser = () => {
    const ctx = useContext(UserContext);
    const { addUser } = ctx;
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const sendData = (event) => {
        event.preventDefault();
        addUser(user);
    }

    return (
        <>
            <form onSubmit={sendData}>
                <h1>Crea un Usuario</h1>
                <label htmlFor="inputName" className="form-label">Nombre:</label>
                <input type="text" className="form-control" id='inputName' name="first_name" onChange={(event) => handleChange(event)}/>
                <label htmlFor="inputApellido" className="form-label">Apellido:</label>
                <input type="text" className="form-control" id='inputApellido' name="last_name" onChange={(event) => handleChange(event)}/>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id='addon-wrapping'>@</span>
                    <input type="text" className="form-control" placeholder='Email' aria-label='Email' aria-describedby='addon-wrapping' name="email" onChange={(event) => handleChange(event)}/>
                </div>
                <button type='submit' className="btn btn-outline-secondary">Crear Usuario</button>
            </form>
        </>
    )
}

export default FormUser;
