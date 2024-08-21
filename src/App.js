
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Announcement from './Components/Navbar/Announcement'
import Navbar from './Components/Navbar/Navbar'
import Home from './Home/Home';
import Shop from './Pages/Shop';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Pages/Cart';



function App() {
  return (
    <div>
      
    <BrowserRouter>
      <Announcement />
      <Navbar />
     <Routes>
       <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/Card/:id' element={<ProductDetails />} />
      <Route path='/Cart' element={<Cart />} />
     </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
