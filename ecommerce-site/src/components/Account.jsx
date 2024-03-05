import "../index.css";
import { useState } from "react";
import { useAccountQuery, useAccountDetailsQuery, useFetchUsersQuery } from "../redux/api";
import { NavLink, useNavigate } from "react-router-dom";

function Account(props) {
    const [userData, setUserData] = useState();
    const navigate = useNavigate();
    console.log(props.user)

    
    const {data, error, isLoading} = useFetchUsersQuery();
    console.log("Data", data);
    console.log(data)
    console.log("Error", error);
    console.log("isLoading", isLoading)

    function isUser(data) {
        return data.username === props.user;
    }
    const found = userData.find(isUser);
    setUserData(found);  

if(isLoading) {
    return <div>Loading Account Details...</div>
}

if(error) {
    return <div>Error: {error.message}</div>
}

        return (
            <>
            <h2>Hello, {userData.name.firstname}!</h2>
            <p><strong>Name</strong>: {userData.name.firstname} {userData.name.lastname} </p>
            <p><strong>Email</strong>: {userData.email}</p>
            <p><strong>Address</strong>: {userData.address.number} {userData.address.street}, {userData.address.city}, {userData.address.zipcode}</p>
            <p><strong>Phone</strong>: {userData.phone}</p>
            <br />
            <button onClick={() => navigate(`/carts/user/${userData.id}`)}>View Your Cart</button>
            </>
        );
      } 

export default Account;