import './index.css';
import shop from './assets/icon.png'
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Account from './components/Account';
import Cart from './components/Cart';
import Nav from './components/Navbar';
import Checkout from './components/Checkout';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';

function App() {
  const [user, setUser] = useState();
  const [id, setId] = useState(null);
  const [token, setToken] = useState(null);
  const [productId, setProductId] = useState(null);
  const [tempProduct, setTempProduct] = useState(null);
  const [userId, setUserId] = useState(null);

  //console.log("token", token)
  //console.log("userId", userId);
  console.log(tempProduct)
  
  return (
    <div>
    <div className="logo">
    <h1><img id='logo-image' src={shop}/>Buymorestuff.com</h1>
    </div>
    <BrowserRouter>
    <nav>
      <Nav token={token} setToken={setToken} userId={userId}/>
    </nav>
      <Routes>
      <Route path="/" element={<Home token={token} setTempProduct={setTempProduct} />} />
      <Route path="/register" element={<Register setId={setId}/>} />
      <Route path="/login" element={<Login setToken={setToken} setUser={setUser} />} />
      <Route path="/account" element={<Account user={user} setUserId={setUserId}/>} />
      <Route path="/carts/user/:id" element={<Cart token={token} userId={userId}/>} />
      <Route path="/products/:id" element={<SingleProduct token={token} setTempProduct={setTempProduct}/>} />
      <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
