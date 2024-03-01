import React, { useState } from 'react'

const BankTransaction = () => {
    const [data, setData] = useState([
        {
            date: "2024-2-24",
            refrence: "",
            amount: "-400",
            Tamount: "123456789",
            summary: "Paymant of sale invoice",
            status: "OK'",
        },
    ]);

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

                            <th>Date</th>
                            <th>Refrance</th>
                            <th>Amount</th>
                            <th>Summary</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {data.map((rowData, index) => (
                            <tr key={index}>
                                <td>{rowData.date}</td>
                                <td>{rowData.refrence}</td>
                                <td className=''> {rowData.Tamount}</td>
                                <td>{rowData.summary}</td>
                                <td>{rowData.status}</td>
                                
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            {/* Drawer */}

        </>
    )
}

export default BankTransaction