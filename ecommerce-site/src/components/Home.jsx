import shop from '../assets/shop.jpg';
import { useFetchProductsQuery } from '../redux/api';
import { useNavigate } from 'react-router-dom';
import "../index.css"

function Home(props) {
  const {data={}, error, isLoading} = useFetchProductsQuery();

  const navigate = useNavigate();

  if(isLoading) {
    return <div>Loading Products...</div>
}

if(error) {
    return <div>Error: {error.message}</div>
} else {
  props.setProducts(data);
}
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
  
export default Home;
  