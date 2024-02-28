import React, { useState } from 'react'

const AllUnreconciled = () => {
    const [data, setData] = useState([
        {
            entry: "A987",
            invoice: "456",
            customer: "56",
            customerName: "Aqib",
            order: "Mobile",
            category: "Normal",
            invoiceDate: "2024-2-15",
            dueDate: "2024-4-15",
            totalAmount: "15,000"
        },
    ])


    return (
        <>
            <div className="overflow-x-auto">
                <div className='flex w-full'>
                    <div className='w-1/3 '>
                        <input
                            type='text'
                            placeholder='🔍Search…'
                            className='input input-bordered border-emerald-600 w-[300px] py-1 rounded-full h-8'
                        />

                    </div>
                    <div className='w-1/3 flex pr-2'>
                        <div className='flex w-full  justify-between'>
                            <span>Account</span>
                            <select className='border input-sm w-40 max-w-xs'>
                                <option value=""></option>
                                <option value="male">PRK</option>
                                <option value="female">ADE</option>
                                <option value="nonbinary">US $</option>
                                {/* Add more gender options as needed */}
                            </select>
                        </div>
                    </div>

                    <div className='w-1/3 flex flex-col gap-2 pl-2'>
                        <div className='flex w-full items-center justify-between'>
                            <span>Period</span>
                            <select className='border input-sm w-40 max-w-xs'>
                                <option value=""></option>
                                <option value="male">PRK</option>
                                <option value="female">ADE</option>
                                <option value="nonbinary">US $</option>
                                {/* Add more gender options as needed */}
                            </select>
                        </div>

                        <div className='flex justify-between items-center '>
                            <label htmlFor="datePicker">Transaction date: </label>
                            <input
                                type="date"
                                id="datePicker"
                                name="datePicker"
                                className='border border-black'
                            />
                           

                        </div>
                    </div>




                </div>
                <div className='flex items-center justify-evenly mt-5 border-b'>
                    <span className='font-semibold flex flex-col'>Bank transactions on the statement
                    <span></span>
                    </span>
                    <span className='font-semibold flex flex-col'>68220,80
                    <span className='text-[10px] text-gray-500'>Balance , 2024-2-24</span>
                    </span>
                    <span className='font-semibold flex flex-col '>Accounting
                    <span className='text-[10px] text-gray-500'>32 of 32 transactions to match or confirm </span>
                    </span>

                </div>


                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Entry</th>
                            <th>Invoice</th>
                            <th>Customer</th>
                            <th>Customer Name</th>
                            <th>Your Order</th>
                            <th>Category</th>
                            <th>Invoice date</th>
                            <th>Due date</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}


                        {
                            data.map((data) => {
                                return (
                                    <tr>
                                        <td>{data.entry}</td>
                                        <td>{data.invoice}</td>
                                        <td>{data.customer}</td>
                                        <td>{data.customerName}</td>
                                        <td>{data.order}</td>
                                        <td>{data.category}</td>
                                        <td>{data.invoiceDate}</td>
                                        <td className='bg-red-100 text-red-500'>{data.dueDate}</td>
                                        <td>{data.totalAmount}</td>
                                    </tr>

                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AllUnreconciled