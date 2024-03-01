import './index.css';
import shop from './assets/icon.png'
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Account from './components/Account';
import Nav from './components/Navbar';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [id, setId] = useState(null);
  const [token, setToken] = useState(null);

  //console.log("token", token)

  //console.log("id", id);
  return (
    <div>
    <div className="logo">
    <h1><img id='logo-image' src={shop}/>Buymorestuff.com</h1>
    </div>
    <BrowserRouter>
    <nav>
      <Nav token={token} setToken={setToken} />
    </nav>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register setId={setId}/>} />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/account" element={<Account token={token}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
