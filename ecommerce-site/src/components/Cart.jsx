import "../index.css";
import { useCartDetailsQuery } from "../redux/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function Cart(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useCartDetailsQuery({ id });

  const removeProduct = (product) => {
    const productInCart = props.cartItems.find(
      (item) => item.product === product
    );

    //function to calculate cost

    if (productInCart) {
      let output = [];
      props.cartItems.map((item) =>
        item.product !== product
          ? output.push(item)
          : output.push({ ...item, quantity: item.quantity - 1 })
      );
      output = output.filter((item) => item.quantity >= 1);
      props.setCartItems(output);
      alert(`Item removed from cart!`);
    }
  };

  if (isLoading) {
    return <div>Getting your cart...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (data) {
    return (
      <>
        <h2>Your Carts</h2>
        {data.map((cart) => {
          return (
            <div key={cart.id}>
              <h3>Cart {cart.id}</h3>
              {cart.products.map((item) => {
                return (
                  <div className="product-set">
                    <p>
                      Product: {item.productId} | Quantity: {item.quantity}
                    </p>
                  </div>
                );
              })}
              <button onClick={() => navigate(`/checkout`)}>
                Check out this cart
              </button>
              <br />
              <br />
              <hr />
            </div>
          );
        })}
        <h3>Latest Cart</h3>
        {props.cartItems.length != 0 ? props.cartItems.map((item) => {
          if (props.products.id === item.productId) {
            return (
              <div className="product-set">
                <p>
                  Product: {item.product} | Quantity: {item.quantity}{" "}
                  <button onClick={() => removeProduct(item.product)}>X</button>
                </p>
                <p><strong>Total Cost: TBD</strong></p>
                <button onClick={() => navigate(`/checkout`)}>
          Check out this cart
        </button>
              </div>
            )}
        }) : "Please add items to this cart"
      }
      </>
    );
  }
  return (
    <>
      <p>Something went wrong</p>
    </>
  );
}

export default Cart;
