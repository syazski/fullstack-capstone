import { useState } from 'react';
import { useRegisterMutation } from '../redux/api';

function Register() {
    const [user, setUser] = useState({
        username: "", 
        password: "", 
        firstname: "", 
        lastname: "",
        email: ""
        });
    
    const [register] = useRegisterMutation();
    
    const eventHandler = (e) => {
        e.preventDefault();
        const {data, error} = register(user);
        //console.log("in register");
    }

    const onUserInput = (e) => {
        //console.log(JSON.stringify(user));
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
      <>
      <h2>Register to access books</h2>
      <form onSubmit={eventHandler}>
        <label htmlFor="username">Username: </label>
        <input 
            type="text" 
            name="username" 
            value={user.username} 
            onChange={onUserInput}/>
        <br/>
        <label htmlFor="password">Password: </label>
        <input 
            type="password" 
            name="password"
            value={user.password} 
            onChange={onUserInput}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input 
        type="email" 
        name="email"
        value={user.email} 
        onChange={onUserInput}
        />
        <br/>
        <p>More about you</p>
        <label htmlFor="firstname">First Name: </label>
        <input 
        type="text" 
        name="firstname"
        value={user.firstname} 
        onChange={onUserInput}
        />
        <br/>
        <label htmlFor="lastname">Last Name: </label>
        <input 
        type="text" 
        name="lastname"
        value={user.lastname} 
        onChange={onUserInput}
        />
        <br/>
        <button>Register</button>
      </form>
      </>
    )
  }
  
  export default Register;