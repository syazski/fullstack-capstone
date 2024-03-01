import "../index.css";
import { useAccountQuery } from "../redux/api";

function Account(props) {
    const { data, error, isLoading} = useAccountQuery();
    console.log(props)
    console.log("Data", data);
    console.log("Error", error);
    console.log("isLoading", isLoading)
return (
    <>
    <h2>Your Cart</h2>
    </>
)

}

export default Account;