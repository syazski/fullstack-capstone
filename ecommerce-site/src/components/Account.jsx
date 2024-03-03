import "../index.css";
import { useAccountQuery, useAccountDetailsQuery, useFetchUsersQuery } from "../redux/api";
import { NavLink, useNavigate } from "react-router-dom";

function Account(props) {
    const navigate = useNavigate();
    console.log(props.user)
    
    const {data, error, isLoading} = useFetchUsersQuery();
    console.log("Data", data);
    //console.log("Error", error);
    //console.log("isLoading", isLoading)

    function isUser(data) {
        return data.username === props.user;
    }
    const found = data.find(isUser);
    console.log(found);


if(isLoading) {
    return <div>Loading Account Details...</div>
}

if(error) {
    return <div>Error: {error.message}</div>
}

if(props.user){
        return (
            <>
            <h2>Hello, {found.name.firstname}!</h2>
            <p><strong>Name</strong>: {found.name.firstname} {found.name.lastname} </p>
            <p><strong>Email</strong>: {found.email}</p>
            <p><strong>Address</strong>: {found.address.number} {found.address.street}, {found.address.city}, {found.address.zipcode}</p>
            <p><strong>Phone</strong>: {found.phone}</p>
            <br />
            <button onClick={() => navigate(`/carts/user/${found.id}`)}>View Your Cart</button>
            </>
        );
      } 
return (
    <>
    <h2>Please log in</h2>
    </>
)};

export default Account;