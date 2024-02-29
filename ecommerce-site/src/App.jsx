import './App.css'
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

  //console.log("id", id);
  return (
    <div>
    <BrowserRouter>
    <nav>
      <Nav />
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
