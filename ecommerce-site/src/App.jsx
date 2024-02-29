import './App.css'
import Home from './components/Home';
import Register from './components/Register';
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [id, setId] = useState(null);

  console.log("id", id);
  return (
    <div>
    <BrowserRouter>
    <nav>
      
    </nav>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register setId={setId}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
