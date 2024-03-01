import React from 'react'

const NewVehicle = () => {
  return (
    <>
            <div className='flex w-full border rounded-xl bg-gray-200 px-2 py-5'>
                <div className='flex flex-col w-1/2 pr-2 gap-3'>
                    <div className='flex items-center justify-between'>
                        <span>Driver Name</span>
                        <input type="text" placeholder="Type here" className=" border input-sm w-full max-w-xs" />
                    </div>

                    <div className='flex items-center justify-between'>
                        <span>Driver Phone</span>
                        <input type="text" placeholder="Type here" className=" border input-sm w-full max-w-xs" />
                    </div>

                    <div className='flex items-center justify-between'>
                        <span>Driver Email</span>
                        <input type="text" placeholder="Type here" className=" border input-sm w-full max-w-xs" />
                    </div>

                </div>

                <div className='w-1/2 pl-2'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center justify-between'>
                            <span>Vehicle Type</span>
                            <input type="text" placeholder="Type here" className=" border input-sm w-full max-w-xs" />
                        </div>

                        <div className='flex items-center justify-between'>
                            <span>Vehicle Number</span>
                            <input type="text" placeholder="Type here" className=" border input-sm w-full max-w-xs" />
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
        </>
  )
}

export default NewVehicle