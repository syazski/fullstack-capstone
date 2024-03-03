import "../index.css";
import { useAccountQuery, useAccountDetailsQuery, useFetchUsersQuery } from "../redux/api";
import { NavLink, useNavigate } from "react-router-dom";

function Account(props) {
    console.log(props.user)
    const { data, error, isLoading} = useFetchUsersQuery();
    console.log("Data", data);
    //console.log("Error", error);
    //console.log("isLoading", isLoading)

// const found = data.find(([e]) => e.username === props.user)
// console.log(found)

if(props.user){
        return (
            <>
            <h2>Hello {props.user}</h2>
            </>
        );
      } 
return (
    <>
    <h2>Please log in</h2>
    </>
)};

export default Account;