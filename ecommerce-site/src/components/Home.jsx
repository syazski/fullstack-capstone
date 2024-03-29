import shop from "../assets/shop.jpg";
import { useFetchProductsQuery } from "../redux/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../index.css";

function Home(props) {
  const { data = {}, error, isLoading } = useFetchProductsQuery();
  const [filteredproducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  //handleChange for the search bar
  const handleChange = (value) => {
    const result = data.filter((product) => {return product.title.toLowerCase().includes(value)})
    setFilteredProducts(result);
  }

  //find matching product to useFetchQuery
  const addProduct = (product, price) => {
    const productInCart = props.cartItems.find(
      (item) => item.product === product
    );

    if (productInCart) {
      props.setCartItems(
        props.cartItems.map((item) =>
          item.product === product
            ? { ...productInCart, quantity: productInCart.quantity + 1 }
            : item
        )
      );
      alert(`Item added to cart!`);
    } else {
      props.setCartItems([...props.cartItems, { product, quantity: 1 }]);
      alert(`New item added to cart!`);
    }
  };

  if (isLoading) {
    return <div>Loading Products...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data) {
    props.setProducts(data);
  }

  if (props.token) {
    return (
      <>
        <div className="searchbar">
        <label>Filter by Item </label>
        <input type="text" placeholder="Search" onChange={(e) => handleChange(e.target.value)}/>
        </div>

        <div className="products">
          {data.map((product) => {
            return (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-details">
                  <p>
                    <strong>Item:</strong> {product.title}
                  </p>
                  <button onClick={() => navigate(`/products/${product.id}`)}>
                    See Details
                  </button>
                  <br />
                  <br />
                  <button onClick={() => addProduct(product.id, product.price)}>
                    Add to Cart
                  </button>
                  <br />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  } 
  
  if(filteredproducts.length != 0) {
    return (
      <>
        <div className="searchbar">
        <label>Filter by Item </label>
        <input type="text" placeholder="Search" onChange={(e) => handleChange(e.target.value)}/>
        </div>

        <div className="products">
          {filteredproducts.map((product) => {
            return (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-details">
                  <p>
                    <strong>Item:</strong> {product.title}
                  </p>
                  <button onClick={() => navigate(`/products/${product.id}`)}>
                    See Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    )
  }
  
  else {
    return (
      <>
        <div className="searchbar">
        <label>Filter by Item </label>
        <input type="text" placeholder="Search" onChange={(e) => handleChange(e.target.value)}/>
        </div>

        <div className="products">
          {data.map((product) => {
            return (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-details">
                  <p>
                    <strong>Item:</strong> {product.title}
                  </p>
                  <button onClick={() => navigate(`/products/${product.id}`)}>
                    See Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Home;
