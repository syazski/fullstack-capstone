import "../index.css";
import { useState, useEffect } from "react";
import { useFetchUsersQuery } from "../redux/api";
import { useNavigate } from "react-router-dom";

function Account(props) {
    console.log(props.user);
    const navigate = useNavigate();
    
    //set state from the matching user
    const {data, error, isLoading} = useFetchUsersQuery();

    console.log("Data", data);
    console.log("Error", error);
    console.log("isLoading", isLoading);

    // function isUser(data) {
    //     return data.username === props.user;
    // }
    // const found = data.find(isUser);
    // setUserData(found);  

    if(isLoading) {
        return <div>Loading Account Details...</div>;
    }

    if(error) {
        return <div>Error</div>;
    }

    const result = data.find(({ username }) => username === props.user);
    console.log(result)

    return (
            <>
            <h2>Hello, {result.name.firstname}!</h2>
            <p><strong>Name</strong>: {result.name.firstname} {result.name.lastname} </p>
            <p><strong>Email</strong>: {result.email}</p>
            <p><strong>Address</strong>: {result.address.number} {result.address.street}, {result.address.city}, {result.address.zipcode}</p>
            <p><strong>Phone</strong>: {result.phone}</p>
            <br />
            <button onClick={() => navigate(`/carts/user/${result.id}`)}>View Your Cart</button>
            </>
        );
      } 

export default Account;