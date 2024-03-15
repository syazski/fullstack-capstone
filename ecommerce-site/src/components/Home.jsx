import shop from '../assets/shop.jpg';
import { useFetchProductsQuery } from '../redux/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../index.css"

function Home(props) {
  const {data={}, error, isLoading} = useFetchProductsQuery();
  const navigate = useNavigate();

  const addProduct = (product) => {
    console.log("product from click", product)
    const productInCart = props.cartItems.find((item) => item.product === product);
    console.log("ProductInCart",productInCart)
    
    if (productInCart) {
      props.setCartItems(
        props.cartItems.map((item) => item.product === product ? {...productInCart, quantity: productInCart.quantity + 1} : item)
        );
      alert(`Item added to cart first if!`);
      } else {
        props.setCartItems([...props.cartItems, {product, quantity: 1}]);
        alert(`Item added to cart with else!`);
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
  