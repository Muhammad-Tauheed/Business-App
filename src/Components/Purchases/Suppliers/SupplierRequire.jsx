import React from 'react'

const SupplierRequire = () => {
    return (
    <>
            
                <div className='border-b w-100'>
                    <h1 className='text-xl font-semibold'>Payments requirements</h1>
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

                <div className='flex items-center justify-between '>
                    <label className=' ' htmlFor="gender">Currency </label>
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
                        <span>Bankgiro</span>
                    </div>
                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                </div>

                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                        <span>Plusgiro</span>
                    </div>
                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                </div>

                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                        <span>Clearing no.</span>
                    </div>
                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                </div>

                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center'>
                        <span>Bank account</span>
                    </div>
                    <input type="text" placeholder="" className=" border input-sm w-[400px] max-w-xs " />
                </div>

                <div className='flex items-center justify-between w-full'>
                    <span className='flex items-center  gap-2'><input type="checkbox" defaultChecked className="checkbox" />OCR</span>
                </div>

                <div className='flex items-center justify-between w-full'>
                    <span className='flex items-center  gap-2'><input type="checkbox" defaultChecked className="checkbox" />Do not send purchase invoices to bank</span>
                </div>
            </>
            )
}

            export default SupplierRequire