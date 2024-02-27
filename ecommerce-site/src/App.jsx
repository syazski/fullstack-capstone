import './App.css'
import Home from './components/Home';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
    <BrowserRouter>
    <nav>
      
    </nav>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
