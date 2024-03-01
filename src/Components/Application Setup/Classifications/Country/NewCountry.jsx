import React from 'react'
import { Link } from 'react-router-dom'

const NewCountry = () => {
    return (
        <>
            <div className='gap-8 border rounded-xl bg-gray-200 py-5 w-full flex'>
                <div className='flex flex-col w-1/2 gap-5'>
                    <div className='flex flex-col items-center w-full'>
                        <span>Country Name</span>
                        <input type="text" placeholder="Type here" className=" border input-sm w-full max-w-xs" />
                    </div>

                    <div className='flex flex-col items-center w-full'>
                        <span>Country Code</span>
                        <input type="text" placeholder="Type here" className=" border input-sm w-full max-w-xs" />
                    </div>

                </div>

                <div className='flex flex-col w-1/2 gap-5'>
                    <div className='flex flex-col items-center w-full'>
                        <span>City Name</span>
                        <input type="text" placeholder="Type here" className=" border input-sm w-full max-w-xs" />
                    </div>

                    <div className='flex flex-col items-center w-full'>
                        <span>City Code</span>
                        <input type="text" placeholder="Type here" className=" border input-sm w-full max-w-xs" />
                    </div>

                </div>
            </div>

            <div className="navbar bg-white fixed bottom-0 z-50 w-[975px] shadow-xl">
                <div className="flex w-full justify-between">
                    <div className='flex gap-2'>
                        <button className='btn w-40 shadow-lg bg-gray-300 hover:text-black '>pseudonymise</button>
                    </div>
                    <div className='flex gap-2'>
                        <button className='btn w-40 shadow-lg bg-blue-600 hover:bg-blue-800 text-white'>Create PDF</button>
                        <Link><button className='btn w-40 shadow-lg bg-red-600  text-white hover:text-black'>Cancle</button></Link>
                    </div>
                </div>
            </div>


        </>
    )
}

export default NewCountry