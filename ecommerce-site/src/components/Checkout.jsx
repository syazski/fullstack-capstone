import "../index.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Checkout() {
  const [billing, setBilling] = useState({
    firstname: "",
    lastname: "",
    address: "",
  });

  return (
    <>
      <h2>Checkout</h2>
      <h3>Items</h3>
      <div>
        <p>Products</p>
        <p>Items</p>
        <p>Total Cost</p>
      </div>
      <h3>Billing Information</h3>
      <form>
        <label htmlFor="firstname">First Name: </label>
        <input type="text" name="firstname" />
        <br />
        <label htmlFor="lastname">Last Name: </label>
        <input type="lastname" name="lastname" />
        <br />
        <label htmlFor="address">Address: </label>
        <input type="address" name="address" />
        <br />
        <br />
        <button>Confirm Billing Address</button>
      </form>
    </>
  );
  // }
  // return (
  //     <>
  //     <p>Something went wrong</p>
  //     </>
  // )
}

export default Checkout;
