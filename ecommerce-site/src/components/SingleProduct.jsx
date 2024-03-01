import { useProductDetailsQuery } from '../redux/api';
import { useParams } from 'react-router-dom';

function SingleProduct() {
        let { id } = useParams();
        const { data, error, isLoading } = useProductDetailsQuery({id});
        
        if (isLoading) {
                return <p>Loading...</p>;
        }
        if(error) {
                return <p>Uh Oh!</p>;
        }

        //console.log(id);
        console.log(data);
        
        return ( 
                <>
                <h2>Product Details</h2>
                <div className ="single-products">
                { data.map((product) => {
                  return (
                        <div key={product.id} className="singleproduct-card">
                        <img src={product.image} alt={product.title} className="singleproduct-image" />
                        
                        <div className="singleproduct-details">
                        <p><strong>Item:</strong> {product.title}</p>
                        <p><strong>Description:</strong> {product.description}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Price:</strong>${product.price}</p>
                        <p><strong>Rating:</strong> {product.rating.rate}</p>
                        <br />
                        <button>Add to Cart</button>
                    </div>
                    </div>
                )
            })
            }
        </div>
        </>
        )
}

export default SingleProduct;