import React from 'react'

const NewTransaction = () => {
    return (
        <>
            <div className='flex justify-between w-full'>
                <div className='w-1/2 flex flex-col pr-2 gap-3'>
                    <div className='flex w-full justify-between items-center'>
                        <span>Date:</span>
                        <input
                            type="date"
                            id="datePicker"
                            className='border w-[190px]'
                        />
                    </div>

                    <div className='flex w-full justify-between items-center'>
                        <span>Refrance</span>
                        <input type="text" placeholder="" className=" border input-sm w-full max-w-xs" />
                    </div>

                    <div className='flex w-full justify-between items-center'>
                        <span className='flex items-center gap-2'><input type="checkbox" defaultChecked className="checkbox" /> Check payment requirements</span>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col pl-2 gap-3'>

                <div className='flex w-full justify-between items-center'>
                        <span>Amount</span>
                        <input type="text" placeholder="" className=" border input-sm w-full max-w-xs" />
                    </div>

                <div className='flex w-full justify-between items-center'>
                        <span>Bank charge</span>
                        <input type="text" placeholder="" className=" border input-sm w-full max-w-xs" />
                    </div>

                    <button className='btn bg-blue-600 text-white font-semibold'>Save</button>
                </div>



            </div>
        </>
    )
}

export default NewTransaction