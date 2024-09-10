
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import './App.css';
import Announcement from './Components/Navbar/Announcement';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div>
      
       <ToastContainer />
      <Announcement />
      <Navbar />
       
      <Outlet />
    </div>
  );
}

export default App;
