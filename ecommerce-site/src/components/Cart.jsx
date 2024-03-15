import "../index.css";
import { useCartDetailsQuery} from "../redux/api";
import { useNavigate, useParams } from "react-router-dom";

function Cart(props) {
    let { id } = useParams();
    const navigate = useNavigate();
    const { data, error, isLoading} = useCartDetailsQuery({id});
    console.log("Data", data);
    // console.log("Error", error);
    // console.log("isLoading", isLoading)
    console.log("Product list", props.products)
    console.log("Cart Items", props.cartItems)

    if(isLoading) {
        return <div>Getting your cart...</div>;
    }

    if(error) {
        return <div>Error!</div>;
    }

    if(data) {
        return (
            <>
            <h2>Your Carts</h2>
            {data.map((cart) => {
                return (
                    <div key={cart.id}>
                    <h3>Cart {cart.id}</h3>
                    {cart.products.map((item) => {
                    // const itemfound = props.find
                    return (
                        <div className="product-set">
                        <p>Product: {item.productId} | Quantity: {item.quantity}</p>
                        </div>
                    )}
            )}
                    <button onClick={() => navigate(`/checkout`)}>Check out this cart</button><br/>
                    <br />
                    <hr />
                    </div>
                )}
                )}
            <h3>Latest Cart</h3>
            {props.cartItems.map((item) => {
                if(props.products.id === item.productId) {
                    return (
                    <div className="product-set">
                    <p>Product: {item.product} | Quantity: {item.quantity}</p>
                    </div>
                    )
                } else {
                    console.log("here")
                }
            })}
                    
            <button onClick={() => navigate(`/checkout`)}>Check out this cart</button>
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