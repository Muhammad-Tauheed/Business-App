import React from 'react'

const SupplierForeign = () => {
    return (
        <>
            <div className='border-b w-100 mt-10'>
                <h1 className='text-xl font-semibold'>Foreign payment requirements</h1>
            </div>

            <div className='flex items-center justify-between w-full mt-3'>
                <div className='flex items-center'>
                    <span>Bank</span>
                </div>
                <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
            </div>

            <div className='flex items-center justify-between '>
                <label className=' ' htmlFor="gender">Country </label>
                <select className='border input-sm w-full max-w-xs'>
                    <option value=""></option>
                    <option value="male">Jazz Cash</option>
                    <option value="female">Easy paisa</option>
                    <option value="nonbinary">Bank</option>
                    {/* Add more gender options as needed */}
                </select>
            </div>

            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center'>
                    <span>BIC</span>
                </div>
                <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
            </div>

            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center'>
                    <span>IBAN</span>
                </div>
                <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
            </div>

            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center'>
                    <span>BBAN</span>
                </div>
                <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
            </div>

            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center'>
                    <span>Bank code</span>
                </div>
                <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
            </div>

            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center'>
                    <span>Payment code</span>
                </div>
                <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
            </div>

            <div className='flex items-center justify-between '>
                <label className=' ' htmlFor="gender">Free code </label>
                <select className='border input-sm w-full max-w-xs'>
                    <option value=""></option>
                    <option value="male">Jazz Cash</option>
                    <option value="female">Easy paisa</option>
                    <option value="nonbinary">Bank</option>
                    {/* Add more gender options as needed */}
                </select>
            </div>

            <div className='flex items-center justify-between '>
                <label className=' ' htmlFor="gender">PAy from bank account </label>
                <select className='border input-sm w-full max-w-xs'>
                    <option value=""></option>
                    <option value="male">Jazz Cash</option>
                    <option value="female">Easy paisa</option>
                    <option value="nonbinary">Bank</option>
                    {/* Add more gender options as needed */}
                </select>
            </div>
        </>
    )
}

export default SupplierForeign