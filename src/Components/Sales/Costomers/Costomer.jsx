import React from 'react'
import TopBar from '../../HomNavbars/TopBar'
import Sidebar from '../../HomNavbars/Sidebar'
import CostaimerDetail from './CostaimerDetail'
import { Link } from 'react-router-dom'

const Costomer = () => {
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
                        <h1 className='text-3xl '>Costomers</h1>
                       <Link to="/customers/1"><button className='btn w-52 text-white bg-gray-600 hover:bg-gray-400'>New customer</button></Link> 
                        </div>
                        <div className='bg-white border px-2 py-5'>
                            <div className='flex items-center justify-start gap-20 '>
                                <input
                                    type='text'
                                    placeholder='🔍Search…'
                                    className='input input-bordered border-indigo-800 w-[300px] py-1 rounded-full'
                                />
                                <div>
                                    <label className='text-lg font-semibold ' htmlFor="gender">Costomer labels </label>
                                    <select className='border w-60 rounded-xl py-2'>
                                        <option value=""></option>
                                        <option value="male">Normal</option>
                                        <option value="female">Good</option>
                                        <option value="nonbinary">Very Good</option>
                                        {/* Add more gender options as needed */}
                                    </select>
                                </div>
                            </div>
                            <div className='divider'></div>
                            <CostaimerDetail />
                            <div className='divider'></div>
                            <div className='flex w-100 items-center justify-between'>
                                <button className='btn  shadow-lg bg-blue-600 hover:bg-blue-800 text-white'>Process multiple customers</button>
                                <span className='text-gray-500 text-sm'>Showing 26 of 26 items </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Costomer