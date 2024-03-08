import "../index.css";
import { useState, useEffect, useDebugValue } from "react";
import { useFetchUsersQuery } from "../redux/api";
import { useNavigate } from "react-router-dom";

function Account(props) {
    const navigate = useNavigate();
    
    //fetch all users
    const {data, error, isLoading} = useFetchUsersQuery();
    console.log("Data", data);
    console.log("Error", error);
    console.log("isLoading", isLoading);


    if(isLoading) {
        return <div>Loading Account Details...</div>;
    }

    if(error) {
        return <div>Error</div>;
    }
    
    //set userId state with matched user
    const result = data.find(({ username }) => username === props.user);
    console.log(props);
    console.log(result.id);
    props.setUserId(result.id);
    
    return (
            <>
            <h2>Hello, {result.name.firstname}!</h2>
            <p><strong>Name</strong>: {result.name.firstname} {result.name.lastname} </p>
            <p><strong>Email</strong>: {result.email}</p>
            <p><strong>Address</strong>: {result.address.number} {result.address.street}, {result.address.city}, {result.address.zipcode}</p>
            <p><strong>Phone</strong>: {result.phone}</p>
            <br />
            <button onClick={() => navigate(`/carts/user/${props.UserId}`)}>View Your Cart</button>
            </>
        );
      } 

export default Account;