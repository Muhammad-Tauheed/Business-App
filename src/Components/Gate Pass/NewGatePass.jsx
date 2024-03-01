import React, { useState } from 'react'
import TopBar from '../HomNavbars/TopBar';
import Sidebar from '../HomNavbars/Sidebar';
import { ImAttachment } from 'react-icons/im';
import { Link } from 'react-router-dom';
import GatePassInputs from './GatePassInputs';

const NewGatePass = () => {
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };
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
                        <h1 className='text-3xl mt-5'>New Gate Pass</h1>
                        <div className='bg-white border px-2 mt-5'>
                            <div className='flex w-full bg-white  py-2 border-b'>
                                <div className='flex flex-col w-1/2 gap-3 pr-2'>

                                    <div className='flex w-full justify-between items-center'>
                                        <span>Transaction no.</span>
                                        <span className='font-bold'>TO BE GENERATE</span>
                                    </div>

                                    <div className='flex w-full justify-between items-center'>
                                        <span>Transaction date:</span>
                                        <input
                                            type="date"
                                            id="datePicker"
                                            className='border w-[190px]'
                                        />
                                    </div>

                                    <div className='flex items-center justify-between'>
                                        <label className='' htmlFor="gender">Vendor</label>
                                        <select className='border input-sm w-full max-w-xs'>
                                            <option value=""></option>
                                            <option value="male">CUSTOMER</option>
                                            <option value="female">SUPPLIER</option>
                                            {/* Add more gender options as needed */}
                                        </select>
                                    </div>

                                    <div className='flex items-center justify-between'>
                                        <label className='' htmlFor="gender">Location</label>
                                        <select className='border input-sm w-full max-w-xs'>
                                            <option value=""></option>
                                            <option value="male">Head Office</option>
                                            <option value="female">Factory</option>
                                            {/* Add more gender options as needed */}
                                        </select>
                                    </div>

                                    <div className='flex w-full justify-between items-center'>
                                        <label className="flex gap-2" >
                                            <input type="radio" name="gender" value="male" className='checkbox' /> Gate Pass Returnable
                                        </label>
                                    </div>

                                </div>

                                <div className='flex flex-col w-1/2  pl-2 gap-3'>

                                    <div className='flex items-center justify-between'>
                                        <label className='' htmlFor="gender">Status</label>
                                        <select className='border input-sm w-full max-w-xs'>
                                            <option value=""></option>
                                            <option value="male">Head Office</option>
                                            <option value="female">Factory</option>
                                            {/* Add more gender options as needed */}
                                        </select>
                                    </div>

                                    <div className='flex items-center justify-between'>
                                        <label className='' htmlFor="gender">Subsidiary</label>
                                        <select className='border input-sm w-full max-w-xs'>
                                            <option value=""></option>
                                            <option value="male">Head Office</option>
                                            <option value="female">Factory</option>
                                            {/* Add more gender options as needed */}
                                        </select>
                                    </div>

                                    <div className='flex w-full justify-between items-center'>
                                        <label className="flex gap-2" >
                                            <input type="radio" name="radio-1" className="radio" checked /> Gate Pass IN
                                        </label>
                                    </div>

                                    <div className='flex w-full justify-between items-center'>
                                        <label className="flex gap-2" >
                                            <input type="radio" name="radio-1" className="radio" /> Gate Pass OUT
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <GatePassInputs/>
                            <div className="navbar bg-white fixed bottom-0 z-50 w-[975px] shadow-xl">
                                <div className="flex w-full justify-between">
                                    <div className='flex gap-2'>
                                        <button className='btn w-40 shadow-lg bg-gray-300 hover:text-black '>pseudonymise</button>
                                    </div>
                                    <div className='flex gap-2'>
                                        <button className='btn w-40 shadow-lg bg-blue-600 hover:bg-blue-800 text-white'>Create PDF</button>
                                        <Link to={"/gatepass"}><button className='btn w-40 shadow-lg bg-red-600  text-white hover:text-black'>Cancle</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default NewGatePass