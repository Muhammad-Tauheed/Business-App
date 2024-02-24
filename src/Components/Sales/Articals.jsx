import React from 'react'
import TopBar from '../HomNavbars/TopBar'
import Sidebar from '../HomNavbars/Sidebar'
import { Link } from 'react-router-dom'

const Articals = () => {
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
                            <h1 className='text-3xl '>
                               Edit articale
                            </h1>
                        </div>
                        <div className='bg-white border '>
                            <div className='flex px-2 py-5'>
                            <div className='flex flex-col lg:w-1/2 px-5'>
                                <div className='border-b w-100'>
                                    <h1 className='text-xl'>Basic information</h1>
                                </div>
                                <span className='flex items-center mt-5 gap-2'><input type="checkbox" defaultChecked className="checkbox" />Active</span>

                                <div className='flex w-100 justify-between mt-3'>
                                    <div className='flex flex-col gap-4'>
                                        <span>Artical no</span>
                                        <span>Artical name</span>
                                        <span>Artical name in English</span>
                                        <span>Barcode</span>
                                        <span>Note</span>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <input type="text" placeholder="" className=" input-bordered border input-sm w-80 max-w-xs" />

                                        <input type="text" placeholder="" className=" input-bordered border  input-sm w-full max-w-xs" />

                                        <input type="text" placeholder="" className=" input-bordered border  input-sm w-full max-w-xs" />

                                        <input type="text" placeholder="" className=" input-bordered border  input-sm w-full max-w-xs" />

                                        <textarea className="textarea textarea-bordered" placeholder=""></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col lg:w-1/2 px-5'>
                                <div className='border-b w-100'>
                                    <h1 className='text-xl'>Stock</h1>
                                </div>
                                <div className='flex w-100 justify-between mt-5'>
                                    <div className='flex flex-col gap-4'>
                                        <span>Stock balance</span>
                                        <span>Manually adjusted</span>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <input type="text" placeholder="" className=" input-bordered border input-sm w-80 max-w-xs" />

                                        <span>2024-2-12</span>
                                    </div>
                                </div>

                                <div className='border-b w-100 mt-8'>
                                    <h1 className='text-xl'>Purchases</h1>
                                </div>

                                <div className='flex w-100 justify-between mt-5'>
                                    <div className='flex flex-col gap-4'>
                                        <span>Purchases price excl.VAT</span>
                                        <span>Last changrd</span>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <input type="text" placeholder="" className=" input-bordered border input-sm w-80 max-w-xs" />
                                    </div>
                                </div>

                                <div className='border-b w-100 mt-8'>
                                    <h1 className='text-xl'>Articale labels</h1>
                                </div>

                                <div className='flex w-100 justify-between mt-5'>
                                    <div className='flex flex-col gap-4'>
                                        <span>Articale taged with</span>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <input type="text" placeholder="" className=" input-bordered border input-sm w-80 max-w-xs" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='divider'></div>
                        <div className='w-100 flex items-center justify-end'>
                            <button className='btn bg-indigo-800 hover:text-black text-white w-52'>Save</button>
                            <button className='btn bg-gray-300 w-52'>Copy</button>
                            <button className='btn bg-red-500 w-52 text-white hover:text-black'>Cancle</button>

                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Articals
