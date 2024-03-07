import "../index.css";
import { useAccountQuery, useAccountDetailsQuery } from "../redux/api";
import { useParams } from "react-router-dom";

function Cart(props) {
    console.log(props)
    let { userId } = useParams();
    const { data, error, isLoading} = useAccountDetailsQuery(props.id);
    console.log("Data", data);
    console.log("Error", error);
    console.log("isLoading", isLoading)

return (
    <>
    <h2>Your Cart</h2>
    </>
)

}

export default Cart;