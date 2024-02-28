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
          <div className='max-2xl:w-1/5 max-xl:w-1/12 bg-black fixed h-full mt-[50px] overflow-hidden'>
            <Sidebar />
          </div>

          <div className='w-full px-8 max-2xl:ml-[250px] max-xl:ml-[100px] mt-[50px] overflow-x-hidden'>
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