import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AllSaleInvoices from './AllSaleInvoices';
import TopBar from '../HomNavbars/TopBar';
import Sidebar from '../HomNavbars/Sidebar';
import UnpaidSaleInvoice from './UnpaidSaleInvoice';
import Draft from './Draft';
import { Link } from 'react-router-dom';

const SaleInvoice = () => {
  const [open, setOpen] = useState(false)
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
            <h1 className='text-3xl ml-5 mt-5'>Sale Overview</h1>
            <div>
              <div className='flex w-100 justify-evenly py-1 mt-9'>
                <button
                  onClick={() => handleTabClick(1)}
                  className={`btn  w-52 ${activeTab === 1 ? "bg-blue-600 hover:bg-blue-800 text-white" : "bg-gray-300 border shadow-lg hover:bg-blue-600 hover:text-white"}`}
                >
                  Draft
                </button>
                <button
                  onClick={() => handleTabClick(2)}
                  className={`btn w-52 ${activeTab === 2 ? "bg-blue-600 hover:bg-blue-800 text-white" : "bg-gray-300 border shadow-lg hover:bg-blue-600 hover:text-white"}`}
                >
                  Unpaid sale invoices
                </button>
                <button
                  onClick={() => handleTabClick(3)}
                  className={`btn w-52 ${activeTab === 3 ? "bg-blue-600 hover:bg-blue-800 text-white" : "bg-gray-300 border shadow-lg hover:bg-blue-600 hover:text-white"}`}

                >
                  All sales invoices
                </button>
                <Link to="/saleInvoice/1"><button className='btn w-52 text-white bg-gray-600 hover:bg-gray-400'>New sale invoice</button></Link>

              </div>

              <div className='divider'></div>

              {activeTab === 1 && <div><Draft /></div>}
              {activeTab === 2 && <div><UnpaidSaleInvoice />  </div>}
              {activeTab === 3 && <div><AllSaleInvoices /></div>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SaleInvoice