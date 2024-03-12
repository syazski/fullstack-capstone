import shop from '../assets/shop.jpg';
import { useFetchProductsQuery } from '../redux/api';
import { useNavigate } from 'react-router-dom';
import "../index.css"

function Home(props) {
  const {data={}, error, isLoading} = useFetchProductsQuery();
  //console.log(data)
  const navigate = useNavigate();

  const addProduct = (e) => {

  }

  if(isLoading) {
    return <div>Loading Products...</div>
}

if(error) {
    return <div>Error: {error.message}</div>
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
                        <button onClick={() => navigate(`/products/${product.id}`)}>See Details</button>
                        <br />
                        <br />
                        <button onClick={addProduct}>Add to Cart</button>
                    </div>
                    </div>
                )
            })
            }
        </div>
      </>
  )} else {

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
  