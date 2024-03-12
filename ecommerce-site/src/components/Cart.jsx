import "../index.css";
import { useCartDetailsQuery } from "../redux/api";
import { useNavigate, useParams } from "react-router-dom";

function Cart(props) {
    let { id } = useParams();
    const navigate = useNavigate();
    const { data, error, isLoading} = useCartDetailsQuery({id});
    console.log("Data", data);
    // console.log("Error", error);
    // console.log("isLoading", isLoading)
    //console.log(props.products)

    if(isLoading) {
        return <div>Getting your cart...</div>;
    }

    if(error) {
        return <div>Error!</div>;
    }

    if(data) {
        return (
            <>
            <h2>Your Cart</h2>
            {data.map((cart) => {
                return (
                    <div>
                    <h3>Cart {cart.id}</h3>
                        <p>ProductId: {cart.products.id}</p>
                        <p>Quantity: {cart.products.quantity}</p>
                    <button onClick={() => navigate(`/checkout`)}>Check out this cart</button>
                    </div>
                )}
                )}
            </>
        )
    }
    return (
        <>
        <p>Something went wrong</p>
        </>
    )

}

export default Cart;