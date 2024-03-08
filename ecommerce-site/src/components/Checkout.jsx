import "../index.css";
import { useParams } from "react-router-dom";

function Checkout(props) {
    // let { id } = useParams();
    // const { data, error, isLoading} = useCartDetailsQuery({id});
    // console.log("Data", data);
    // console.log("Error", error);
    // console.log("isLoading", isLoading)

    // if(isLoading) {
    //     return <div>Getting your cart...</div>;
    // }

    // if(error) {
    //     return <div>Error!</div>;
    // }

    // if(data) {
return (
    <>
    <h2>Checkout</h2>
    {/* {data.map((cart) => {
        return (
            <div>
            <h3>Cart {cart.id}</h3>
            <button>Check out this cart</button>
            </div>
        )
        })
    } */}
    </>
)
    // }
    // return (
    //     <>
    //     <p>Something went wrong</p>
    //     </>
    // )
    }


export default Checkout;