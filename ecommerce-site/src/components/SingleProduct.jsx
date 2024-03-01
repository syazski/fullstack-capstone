import { useProductDetailsQuery } from '../redux/api';
import { useParams } from 'react-router-dom';

function SingleProduct(id) {
        const { data, error, isLoading } = useProductDetailsQuery();

        if (isLoading) {
                return <p>Loading...</p>;
        }

        if(error) {
                return <p>Uh Oh!</p>;
        }

        console.log(data);
        
        return ( 
                <>
                <h2>Product Details</h2>
                </>
        )
}

export default SingleProduct;