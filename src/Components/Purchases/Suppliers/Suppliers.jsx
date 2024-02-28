import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../../HomNavbars/TopBar'
import Sidebar from '../../HomNavbars/Sidebar'
import SuppliersDetail from './SuppliersDetail'
import { BsSend } from "react-icons/bs";
const Suppliers = () => {
  return (
    <>
      <div className='h-full bg-gray-100' >
        <div className='fixed w-screen z-50'>
          <TopBar />
        </div>
        <div className='flex'>
          <div className='lg:w-1/5 bg-black fixed h-full mt-[50px]'>
            <Sidebar />
          </div>
          <div className='lg:w-full px-8 ml-[300px] mt-[50px]'>
            <div className='flex w-100 items-center justify-between py-5'>
              <h1 className='text-3xl '>Suppliers</h1>
              <Link to="/suppliers/1"><button className='btn w-52 text-white bg-gray-600 hover:bg-gray-400'>New suppliers</button></Link>
            </div>
            <div className='bg-white border px-2 py-5'>
              <div className='flex items-center justify-start gap-20 '>
                <input
                  type='text'
                  placeholder='🔍Search…'
                  className='input input-bordered border-emerald-600 w-[300px] py-1 rounded-full'
                />
                <div>
                </div>
              </div>
              <div className='divider'></div>
              
                  <SuppliersDetail/>
              <div className='divider'></div>
              <div className='flex w-100 items-center justify-between'>
                <div className='flex '>
                <button className='btn shadow-lg bg-blue-600 hover:bg-blue-800 text-white'>Process multiple suppliers</button>

                <button className='btn bg-gray-300 text-black font-semibold'><BsSend /> invite supplier to send e-invoice</button>
                </div>
                <span className='text-gray-500 text-sm'>Showing 26 of 26 items </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Suppliers