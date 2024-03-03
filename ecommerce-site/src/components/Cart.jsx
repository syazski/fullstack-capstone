import "../index.css";
import { useAccountQuery, useAccountDetailsQuery } from "../redux/api";

function Cart(props) {
    const { data, error, isLoading} = useAccountDetailsQuery(props.id);
    console.log(props)
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