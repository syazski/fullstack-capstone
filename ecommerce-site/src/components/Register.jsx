import "../index.css";
import { useState } from "react";
import { useRegisterMutation } from "../redux/api";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  const [error, setError] = useState(null);
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  //console.log(props)

  const eventHandler = async (e) => {
    e.preventDefault();
    const { data, error } = await register(user);

    if (error) {
      setError(error.data);
      //console.log(`error ${JSON.stringify(error.data)}`);
    } else {
      props.setId(data.id);
      navigate("/login");
      //console.log(`data ${JSON.stringify(data.id)}`);
    }
  };

  const onUserInput = (e) => {
    if (error) {
      setError(null);
    }
    //console.log(JSON.stringify(user));
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="register-wrapper">
        <h2>Register to access your cart</h2>
        {/*error message*/}
        {error ? <p>{error}</p> : <span />}
        <form onSubmit={eventHandler}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={onUserInput}
          />
          <br />
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
          <br />
          <label htmlFor="firstname">First Name: </label>
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={onUserInput}
          />
          <br />
          <label htmlFor="lastname">Last Name: </label>
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={onUserInput}
          />
          <br />
          <br />
          <button>Register</button>
        </form>
      </div>
    </>
  );
}

export default Register;
