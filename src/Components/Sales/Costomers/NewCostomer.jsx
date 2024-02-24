import React from 'react'
import TopBar from '../../HomNavbars/TopBar'
import Sidebar from '../../HomNavbars/Sidebar'
import NewEntry from './NewEntry'

const NewCostomer = () => {
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
                        <h1 className='text-3xl '>Add new costomers</h1>
                        <div className='bg-white border px-2 mt-5 py-5'>
                            <div className='flex w-full bg-white  py-2 border-b'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex gap-16'>
                                        <span className='flex'>Costomer Name :</span>
                                        <input type="text" placeholder="Type here" className="border input-sm w-[400px] max-w-xl" />
                                    </div>

                                    <div className='flex gap-7'>
                                        <label htmlFor="referenceInput">Your reference:</label>
                                        <input
                                            type="text"
                                            id="referenceInput"
                                            className='border'
                                            placeholder='Your rafrance'
                                        />

                                        <label htmlFor="referenceInput">Our reference:</label>
                                        <input
                                            type="text"
                                            id="referenceInput"
                                            className='border'
                                            placeholder='Our rafrance'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col ml-5 gap-6'>

                                    <div className='flex '>
                                        <label htmlFor="datePicker ">Entry Date:</label>
                                        <input
                                            type="date"
                                            id="datePicker"
                                            className='border ml-[85px]'
                                        />
                                    </div>

                                    <div className='flex'>
                                        <label htmlFor="referenceInput">Your order reference:</label>
                                        <input
                                            type="text"
                                            id="referenceInput"
                                            className='border ml-[35px]'
                                            placeholder='Our order'
                                        />
                                    </div>
                                </div>
                            </div>
                            <NewEntry />
                            <div className='divider'></div>
                            <div className='flex w-100 items-center justify-between'>
                                <button className='btn bg-indigo-800 text-white hover:text-black font-semibold'>Save details</button>
                                <span className='text-gray-500 text-sm'>Showing 26 of 26 items </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default NewCostomer