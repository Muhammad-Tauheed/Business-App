import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import LandingPage from './Components/Pages/LandingPage';
import Signup from './Components/Pages/Signup';
import Home from './Components/Pages/Home';
import SaleInvoice from './Components/Sales/SaleInvoice';
import NewInoice from './Components/Sales/NewInoice';
import { ToastContainer, toast } from 'react-toastify';
import Costomer from './Components/Sales/Costomers/Costomer';
import NewCostomer from './Components/Sales/Costomers/NewCostomer';
import Suppliers from './Components/Purchases/Suppliers/Suppliers';
import NewSupplier from './Components/Purchases/Suppliers/NewSupplier';
import PuschaseInvoice from './Components/Purchases/PurchasingInvoice/PuschaseInvoice';

function App() {
  return (
    <>
    <div className='h-screen'>
  <Routes>
  
  <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/saleInvoice' element={<SaleInvoice/>}></Route>
    <Route path='/saleInvoice/:id' element={<NewInoice/>}></Route>
    <Route path='/customers' element={<Costomer/>}></Route>
    <Route path='/customers/:id' element={<NewCostomer/>}></Route>
    <Route path='/suppliers' element={<Suppliers/>}></Route>
    <Route path='/suppliers/:id' element={<NewSupplier/>}></Route>
    <Route path='/purchases' element={<PuschaseInvoice/>}></Route>
  </Routes>
  <ToastContainer /> 
    </div>
    </>
  
  );
}

export default App;
