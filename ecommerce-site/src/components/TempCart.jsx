import { useNavigate } from "react-router-dom";
import "../index.css";
import { useAccountQuery, useAccountDetailsQuery } from "../redux/api";

function TempCart(props) {
    //const { data, error, isLoading} = useAccountDetailsQuery(props.id);
    console.log(props)
    const navigate = useNavigate();
    // console.log("Data", data);
    // console.log("Error", error);
    // console.log("isLoading", isLoading)

return (
    <>
    <h2>Your Cart</h2>
    <p>Temporary Cart Details...</p>
    <br />

    <button onClick={() => navigate(`/login`)}>Login to Checkout</button>
    </>
)

}

export default TempCart;