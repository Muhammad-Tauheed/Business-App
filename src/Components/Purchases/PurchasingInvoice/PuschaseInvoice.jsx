import React, { useState } from 'react'
import TopBar from '../../HomNavbars/TopBar';
import Sidebar from '../../HomNavbars/Sidebar';
import { Link } from 'react-router-dom';
import PurchasesDraft from './PurchasesDraft';
import UnpaidPurchaseInvoice from './UnpaidPurchaseInvoice';
import AllPurchaseInvoice from './AllPurchaseInvoice';




const PuschaseInvoice = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <div className='h-full bg-white' >
        <div className='fixed w-screen z-50'>
          <TopBar />
        </div>
        <div className='flex'>
          <div className='lg:w-1/5 bg-black fixed h-full mt-[50px]'>
            <Sidebar />
          </div>

          <div className='lg:w-full ml-[300px] mt-[50px]'>
            <h1 className='text-3xl ml-5 mt-5'>Puschase invoice</h1>
            <div>
              <div className='flex w-100 justify-evenly py-1 mt-9'>
                <button
                  onClick={() => handleTabClick(1)}
                  className={`btn  w-52 ${activeTab === 1 ? "bg-indigo-800 text-white" : "bg-gray-300 border shadow-lg hover:bg-indigo-800 hover:text-white"}`}
                >
                  Draft
                </button>
                <div className="indicator">
                  <span className="indicator-item badge bg-blue-500 text-white">19</span>
                <button
                  onClick={() => handleTabClick(2)}
                  className={`btn w-52 ${activeTab === 2 ? "bg-indigo-800 text-white" : "bg-gray-300 border shadow-lg hover:bg-indigo-800 hover:text-white"}`}
                >
                  Unpaid purchases invoices
                </button>
                </div>
                <button
                  onClick={() => handleTabClick(3)}
                  className={`btn w-52 ${activeTab === 3 ? "bg-indigo-800 text-white" : "bg-gray-300 border shadow-lg hover:bg-indigo-800 hover:text-white"}`}

                >
                  
                  All purchases invoices
                </button>
                <Link to="/purchases/1"><button className='btn w-52 bg-green-200'>New purchase invoice</button></Link>

              </div>

              <div className='divider'></div>

              {activeTab === 1 && <div><PurchasesDraft /></div>}
              {activeTab === 2 && <div><UnpaidPurchaseInvoice /></div>}
              {activeTab === 3 && <div><AllPurchaseInvoice /></div>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PuschaseInvoice