import "../index.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Checkout(props) {
  const [error, setError] = useState(null);
  const [billing, setBilling] = useState({
    firstname: "",
    lastname: "",
    address: "",
  });

  const onUserInput = (e) => {
    if (error) {
      setError(null);
    }
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2>Checkout</h2>
      <h3>Billing Information</h3>
      <form>
        <label htmlFor="firstname">First Name: </label>
        <input type="text" name="firstname" onChange={onUserInput} />
        <br />
        <label htmlFor="lastname">Last Name: </label>
        <input type="lastname" name="lastname" onChange={onUserInput} />
        <br />
        <label htmlFor="address">Address: </label>
        <input type="address" name="address" onChange={onUserInput} />
        <br />
        <br />
      {billing ? 
      <p><strong>First Name:</strong> {billing.firstname}<br/> 
      <strong>Last Name:</strong> {billing.lastname}<br/> 
      <strong>Address:</strong> {billing.address}</p> 
      : <span />}
      <button>Confirm Billing Address</button>
      </form>
    </>
  )}

export default Checkout;
