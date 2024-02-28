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
import NewPurchaseInvoice from './Components/Purchases/PurchasingInvoice/NewPurchaseInvoice';
import EditCustomer from './Components/Sales/Costomers/EditCustomer';
import NewArticals from './Components/Sales/Articals/NewArticle';
import Artical from './Components/Sales/Articals/Article';
import EditArticle from './Components/Sales/Articals/EditArticle';
import JournalEntries from './Components/Accounting/Journal Entries/JournalEntries';
import NewJournal from './Components/Accounting/Journal Entries/NewJournal';
import CashandBank from './Components/CAsh and Bank/CashandBank';

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
    <Route path='/purchases/:id' element={<NewPurchaseInvoice/>}></Route>
    <Route path='/newarticles' element={<NewArticals/>}></Route>
    <Route path='/editcustomer' element={<EditCustomer/>}></Route>
    <Route path='/article' element={<Artical/>}></Route>
    <Route path='/editarticle' element={<EditArticle/>}></Route>
    <Route path='/journalentries' element={<JournalEntries/>}></Route>
    <Route path='/newjournal' element={<NewJournal/>}></Route>
    <Route path='/cashandbank' element={<CashandBank/>}></Route>
  </Routes>
  <ToastContainer /> 
    </div>
    </>
  
  );
}

export default App;
