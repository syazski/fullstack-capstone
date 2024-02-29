import { useState } from 'react';

function Login() {
    const [user, setUser] = useState({
        username: "", 
        password: "", 
        firstname: "", 
        lastname: "",
        email: ""
        });
    
    const [error, setError] = useState(null);
    
    const eventHandler = async (e) => {
        e.preventDefault();
        //const {data, error} = await register(user);
        
        if(error){
            //setError(error);
            //console.log(`error ${JSON.stringify(error.data)}`);
        } else {
            //props.setId(data.id)
            //console.log(`data ${JSON.stringify(data.id)}`);
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
        {error ? <p>error</p>: <span />}
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