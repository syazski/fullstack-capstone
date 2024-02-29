import { useState } from 'react';
import { useLoginMutation } from '../redux/api';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const [user, setUser] = useState({
        username: "", 
        password: "", 
        });
    
    const [error, setError] = useState(null);
    const [login] = useLoginMutation();
    const navigate = useNavigate();
    
    const eventHandler = async (e) => {
        e.preventDefault();
        const {data, error} = await login(user);
        
        // console.log("data", data);
        // console.log("error", error);

        if(error){
            setError(error.data);
            //console.log(`error ${JSON.stringify(error.data)}`);
        } else {
            props.setToken(data.token)
            //console.log(`data ${JSON.stringify(data.token)}`);
            navigate("/account");
        }
    }

    const onUserInput = (e) => {
        //console.log(JSON.stringify(user));
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <>
        <h2>Login</h2>
        {/*error message*/}
        {error ? <p>{error}</p>: <span />}
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
          <br/>
          <button>Login</button>
        </form>
        </>
      )
  }
  
  export default Login;