import { NavLink, useNavigate } from "react-router-dom";

function Nav(props) {
    const navigate = useNavigate();

    const logoutUser = () => {
      props.setToken(null);
      navigate("/");
    }
    
    if(props.token){
      return (
      <nav>
      <NavLink to ="/">Homepage</NavLink>
      <NavLink to ="/Account">Cart</NavLink>
      <a onClick={logoutUser}>Logout</a>
      </nav>
      );
    } 
    return (
      <div id="navbar">
      <NavLink to ="/">Homepage</NavLink>
      <NavLink to ="/login">Login</NavLink>
      <NavLink to ="/register">Not a member? <strong>Register Now</strong></NavLink>
      </div>
    )
  }
  
  export default Nav;