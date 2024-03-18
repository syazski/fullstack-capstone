import * as React from 'react'
import { useState } from 'react';
import { useLoginMutation } from '../redux/api';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const [userInfo, setUserInfo] = useState({
        username: "", 
        password: "",
        });

    const [error, setError] = useState(null);

    const [login] = useLoginMutation();
    const navigate = useNavigate();
    
    const eventHandler = async (e) => {
        e.preventDefault();
        const {data, error} = await login(userInfo);
        
        // console.log("data", data);
        // console.log("error", error);

        if(error){
            setError(error.data);
            //console.log(`error ${JSON.stringify(error.data)}`);
        } else {
            props.setToken(data.token)
            props.setUser(userInfo.username)
            //console.log(`data ${JSON.stringify(userInfo.username)}`);
            
            navigate(`/account`);
        }
    }

    const onUserInput = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    return (
        <>
        <div className='login-wrapper'>
        <h2>Login</h2>
        {/*error message*/}
        {error ? <p>Error: {error}</p>: <span />}
        <form onSubmit={eventHandler}>
          <label htmlFor="username" aria-label='username'>Username: </label>
          <input
              type="text" 
              name="username" 
              value={userInfo.username} 
              onChange={onUserInput}/>
          <br/>
          <label htmlFor="password" aria-label='password'>Password: </label>
          <input
              type="password" 
              name="password"
              value={userInfo.password} 
              onChange={onUserInput}
          />
          <br/>
          <button>Login</button>
        </form>
        </div>
        </>
      )
  }
  
  export default Login;