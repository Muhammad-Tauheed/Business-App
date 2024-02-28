import React from 'react'
import TopBar from '../../HomNavbars/TopBar'
import Sidebar from '../../HomNavbars/Sidebar'
import { Link } from 'react-router-dom'
import { IoMdAddCircleOutline } from "react-icons/io";

const NewCostomer = () => {
    return (
        <>
            <div className='h-full bg-gray-100 overflow-y-scroll' >
        <div className='fixed w-screen z-50'>
            <TopBar />
        </div>
        <div className='flex'>
            <div className='max-2xl:w-1/5 max-xl:w-1/12 bg-black fixed h-full mt-[50px] overflow-hidden'>
                <Sidebar />
            </div>
            <div className='w-full px-8 max-2xl:ml-[250px] max-xl:ml-[100px] mt-[50px] overflow-x-hidden'>
                <h1 className='text-3xl '>Add new costomers</h1>

                <div className='bg-white border pt-4 pb-20 mt-10'>
                    <div className="flex w-100 ">
                        <div className='lg:w-1/2 pl-2 pr-5 flex flex-col'>

                            <div className='border-b w-100'>

                                <h1 className='text-xl '>Basic information</h1>
                            </div>
                            <div className='flex w-full'>
                                <div className='flex flex-col items-start w-full     gap-4'>

                                    <div className='flex items-center justify-between w-full'>
                                    <span className='text-lg mt-3'>Search new costomer</span>
                                    <input
                                        type='text'
                                        placeholder='🔍Search…'
                                        className='input input-bordered border-indigo-800 w-[300px] mt-3 input-sm rounded-full'
                                    />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <span className='flex items-center mt-5 gap-2'><input type="checkbox" defaultChecked className="checkbox" />Active</span>
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>Contomer no.</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>Contomer name</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>Contomer tupe</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>Personal/Corporate ID no.</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>Address</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span></span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>Postcode</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>City</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>Country</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>Sales document language</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>GLN</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>VAT no.</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>Phone no.</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>Mobile no.</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>E-mail invoice</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>E-mail cc address</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>Website</span>
                                    </div>
                                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                                    </div>

                                    <div className='flex items-start justify-between w-full'>
                                    <div className='flex items-center'>
                                        <span>Notes</span>
                                    </div>
                                    <textarea placeholder="" className="textarea textarea-bordered textarea-lg w-[400px]max-w-xs" ></textarea>
                                    </div>



                                  

                    
                                </div>

                            </div>


                        </div>

                        <div className='lg:w-1/2 flex flex-col px-2'>
                            <div className='border-b w-100'>
                                <h1 className='text-xl font-semibold'>E-invoice</h1>
                            </div>

                            <div className='flex w-full items-center justify-between mt-3'>
                                <span>Check if your costomer can receive e-invoice</span>
                                <button className='btn bg-gray-300'>Check recipient</button>
                            </div>

                            <div className='border-b w-100 mt-10'>
                                <h1 className='text-xl font-semibold'>Refrance</h1>
                            </div>

                            <div className='flex w-full items-center justify-between mt-3'>
                                <span>Your refrence</span>
                                <input type="number" placeholder="" className=" border input-sm w-full max-w-xs " />
                            </div>

                            <div className='border-b w-100 mt-10'>
                                <h1 className='text-xl font-semibold'>Delivery requirements</h1>
                            </div>

                            <div className='flex w-full items-center justify-between mt-3'>
                                <span>Term of delivery</span>
                                <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
                            </div>

                            <div className='flex w-full items-center justify-between mt-2'>
                                <span>Delivery method</span>
                                <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
                            </div>

                            <div className='flex w-full items-center justify-between mt-3'>
                                <Link><span className='text-blue-500 hover:underline flex items-center'> <IoMdAddCircleOutline /> Add delivery address</span></Link>
                            </div>

                            <div className='border-b w-100 mt-10'>
                                <h1 className='text-xl font-semibold'>Payment requirements</h1>
                            </div>
                            <div className='flex items-center justify-between mt-3'>
                                <label className=' ' htmlFor="gender">Terms of payment </label>
                                <select className='border input-sm w-full max-w-xs'>
                                    <option value=""></option>
                                    <option value="male">Jazz Cash</option>
                                    <option value="female">Easy paisa</option>
                                    <option value="nonbinary">Bank</option>
                                    {/* Add more gender options as needed */}
                                </select>
                            </div>

                            <div className='flex items-center justify-between mt-2'>
                                <label className='' htmlFor="gender">Currency </label>
                                <select className='border input-sm w-full max-w-xs'>
                                    <option value=""></option>
                                    <option value="male">PRK</option>
                                    <option value="female">ADE</option>
                                    <option value="nonbinary">US $</option>
                                    {/* Add more gender options as needed */}
                                </select>
                            </div>

                            <div className='flex items-center justify-between mt-2'>
                                <label className='' htmlFor="gender">Pay to account </label>
                                <select className='border input-sm w-full max-w-xs'>
                                    <option value=""></option>
                                    <option value="male">PRK</option>
                                    <option value="female">ADE</option>
                                    <option value="nonbinary">US $</option>
                                    {/* Add more gender options as needed */}
                                </select>
                            </div>

                            <div className='flex w-full items-center justify-between mt-2'>
                                <span>Sale price list</span>
                                <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
                            </div>

                            <div className='flex w-full items-center justify-between mt-2'>
                                <span>Discount agreement</span>
                                <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
                            </div>

                            <div className='flex w-full items-center justify-between mt-2'>
                                <span>Customer discount</span>
                                <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
                            </div>

                            <div className='border-b w-100 mt-10'>
                                <h1 className='text-xl font-semibold'>Customer labels</h1>
                            </div>

                            <div className='flex w-full items-center justify-between mt-3'>
                                <span>Customer tagged with</span>
                                <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar bg-white fixed bottom-0 z-50 w-[975px] shadow-xl">
                            <div className="flex w-full justify-between">
                            <div className='flex gap-2'>
                                    <button className='btn w-40 shadow-lg bg-gray-300 hover:text-black '>pseudonymise</button>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='btn w-40 shadow-lg bg-blue-600 hover:bg-blue-800 text-white'>Save</button>
                                    <button className='btn w-40 shadow-lg bg-red-600  text-white hover:text-black'>Cancle</button>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default NewCostomer





