import "../index.css";
import { useProductDetailsQuery } from "../redux/api";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function SingleProduct(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useProductDetailsQuery({ id });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Uh Oh!</p>;
  }
  //console.log(id);
  //console.log(data);

  if (props.token) {
    return (
      <>
        <h2>Product Details</h2>
        <div className="single-products">
          <div key={data.id} className="singleproduct-card">
            <img
              src={data.image}
              alt={data.title}
              className="singleproduct-image"
            />

            <div className="singleproduct-details">
              <p>
                <strong>Item:</strong> {data.title}
              </p>
              <p>
                <strong>Description:</strong> {data.description}
              </p>
              <p>
                <strong>Category:</strong> {data.category}
              </p>
              <p>
                <strong>Price:</strong>${data.price}
              </p>
              <p>
                <strong>Rating:</strong> {data.rating.rate}
              </p>
              <br />
              <button onClick={() => navigate(`/`)}>Go back</button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2>Product Details</h2>
        <div className="single-products">
          <div key={data.id} className="singleproduct-card">
            <img
              src={data.image}
              alt={data.title}
              className="singleproduct-image"
            />

            <div className="singleproduct-details">
              <p>
                <strong>Item:</strong> {data.title}
              </p>
              <p>
                <strong>Description:</strong> {data.description}
              </p>
              <p>
                <strong>Category:</strong> {data.category}
              </p>
              <p>
                <strong>Price:</strong>${data.price}
              </p>
              <p>
                <strong>Rating:</strong> {data.rating.rate}
              </p>
              <br />
              <button onClick={() => navigate(`/login`)}>
                Login to Add to Cart
              </button>
              <br />
              <br />
              <button onClick={() => navigate(`/`)}>Go back</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SingleProduct;
