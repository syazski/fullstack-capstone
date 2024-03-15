import shop from '../assets/shop.jpg';
import { useFetchProductsQuery } from '../redux/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../index.css"

function Home(props) {
  const {data={}, error, isLoading} = useFetchProductsQuery();
  // const [cart, setCart] = useState();
  const navigate = useNavigate();

  // const addProduct = (item) => {
  //           let cartState = {
  //             id: "",
  //             qty: ""
  //           };
  //           if (item.id) {
  //                   cartState.qty = cartState.qty + 1
  //           } 
  //           else {
  //                  cartState  = {
  //                   id: item,
  //                   qty: 1
  //                 }
  //                 //console.log(cartState)
  //                 return setCart(cartState);
  //               }
  //             }
  //     console.log(cart);

  const addProduct = (productId) => {
    const productInCart = props.cartItems.find((item) => item.id === productId);
    if (productInCart) {
      props.setCartItems(
        props.cartItems.map((item) =>
          item.id === productId ? {...productInCart, quantity: productInCart.quantity + 1} : item
        )
      );
      alert(`Item added to cart!`);
      } else {
        props.setCartItems([...props.cartItems, {productId, quantity: 1}]);
        alert(`Item added to cart!`);
      }
    }
              
if(isLoading) {
    return <div>Loading Products...</div>
}

if(error) {
    return <div>Error: {error.message}</div>
} else {
  props.setProducts(data);
}

if(props.token) {
  return (
      <>
        {/* Search & Filter Bar */}
        <div className ="products">
            {data.map((product) => {
                return (
                    <div key={product.id} className="product-card">
                        
                        <img src={product.image} alt={product.title} className="product-image" />
                    <div className="product-details">
                        <p><strong>Item:</strong> {product.title}</p>
                        <button onClick={() => navigate(`/products/${product.id}`)}>See Details</button><br/>
                        <br />
                        <button onClick={() => addProduct(product.id)}>Add to Cart</button><br />
                    </div>
                    </div>
                )
            })
            }
        </div>
      </>
    )
  } else {
    return (
      <>
        {/* Search & Filter Bar */}
        <div className ="products">
            {data.map((product) => {
                return (
                    <div key={product.id} className="product-card">
                        
                        <img src={product.image} alt={product.title} className="product-image" />
                    <div className="product-details">
                        <p><strong>Item:</strong> {product.title}</p>
                        <button onClick={() => navigate(`/products/${product.id}`)}>See Details</button>
                    </div>
                    </div>
                )
            })
            }
        </div>
      </>
    )
  }
}
  
export default Home;
  