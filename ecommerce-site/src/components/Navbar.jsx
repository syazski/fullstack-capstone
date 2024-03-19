import { NavLink, useNavigate } from "react-router-dom";

function Nav(props) {
  const navigate = useNavigate();

  const logoutUser = () => {
    props.setToken(null);
    navigate("/");
  };

  const latestCart = () => {
    navigate(`/carts/user/${props.userId}`);
  };

  if (props.token) {
    return (
      <div id="navbar">
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/Account">Account</NavLink>
        <a onClick={latestCart}>Cart</a>
        <a onClick={logoutUser}>Logout</a>
      </div>
    );
  }
  return (
    <div id="navbar">
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/login">Login</NavLink>
      {/* <NavLink to="/register">
        Not a member? <strong>Register Now</strong>
      </NavLink> */}
    </div>
  );
}

export default Nav;
