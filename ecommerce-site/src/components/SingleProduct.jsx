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

        console.log(id);
        console.log(data);

        return ( 
                <>
                <h2>Product Details</h2>
                <button>Add to Cart</button>
                </>
        )
}

export default SingleProduct;