import "../index.css";
import { useCartDetailsQuery } from "../redux/api";
import { useParams } from "react-router-dom";

function Cart(props) {
    let { id } = useParams();
    const { data, error, isLoading} = useCartDetailsQuery({id});
    console.log("Data", data);
    console.log("Error", error);
    console.log("isLoading", isLoading)

return (
    <>
    <h2>Your Cart</h2>
    {data.map((cart) => {
        return (
            <div>
            <h2>Cart {cart.id}</h2>

            </div>
        )
        })
    }
    <button>Check out this cart</button>
    </>
)

}

export default Cart;