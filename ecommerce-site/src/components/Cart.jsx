import "../index.css";
import { useCartDetailsQuery } from "../redux/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useCartDetailsQuery({ id });
  const [cost, setCost] = useState("0.00");

  // useEffect(() => {
  //   let prices = [];
  //   const found = props.products.map(item => {
  //     item.id === props.cartItems.productId
  //   });
  //   prices.push(found);
  //   console.log(prices)}, [props.cartItems.length])

  const removeProduct = (product) => {
    const productInCart = props.cartItems.find(
      (item) => item.product === product
    );

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
                  Product: {item.product} | Quantity: {item.quantity} | Price: $0.00   
                  <button onClick={() => removeProduct(item.product)}>X</button>
                </p>
              </div>
            )}
        })
        : "Please add items to this cart"}
        <><p><strong>Total Cost: ${cost}</strong></p><button onClick={() => navigate(`/checkout`)}>Check out this cart</button></>
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
