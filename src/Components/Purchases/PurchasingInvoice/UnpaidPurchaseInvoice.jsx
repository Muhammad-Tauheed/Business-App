import React, { useState } from 'react'
import { GrAttachment } from "react-icons/gr";

const UnpaidPurchaseInvoice = () => {
    const [data,setData]=useState([
        {
          entry:"A987",
          invoice:"456",
          supplier:"56",
          supplierName:"Aqib",
          invoiceDate:"2024-2-15",
          dueDate:"2024-4-15",
          status:"paid",
          totalAmount:"15,000"
        },
        {
            entry:"A987",
            invoice:"456",
            supplier:"56",
            supplierName:"Aqib",
            invoiceDate:"2024-2-15",
            dueDate:"2024-4-15",
            status:"paid",
            totalAmount:"15,000"
          },
          {
            entry:"A987",
            invoice:"456",
            supplier:"56",
            supplierName:"Aqib",
            invoiceDate:"2024-2-15",
            dueDate:"2024-4-15",
            status:"paid",
            totalAmount:"15,000"
          },
          {
            entry:"A987",
            invoice:"456",
            supplier:"56",
            supplierName:"Aqib",
            invoiceDate:"2024-2-15",
            dueDate:"2024-4-15",
            status:"paid",
            totalAmount:"15,000"
          },
    ])
  return (
    <>
    <div className="overflow-x-auto">
      <div className='flex items-center justify-evenly'>
    <input
				type='text'
				placeholder='🔍Search…'
				className='input input-bordered border-indigo-800 w-[300px] py-1 rounded-full'
			/>

      <div>
      <div className='flex gap-5'>
      <label htmlFor="datePicker">Invoice a date: </label>
      <input
        type="date"
        id="datePicker"
        name="datePicker"
        className='border border-black'
      />

      - 

      <input
        type="date"
        id="datePicker"
        name="datePicker"
        className='border border-black'
      />
      <label htmlFor="datePicker">Status </label>

    </div>

      </div>
      </div>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
 
        <th>Entry</th>
        <th>Invoice</th>
        <th>Supplier</th>
        <th>Supplier Name</th>
        <th>Invoice date</th>
        <th>Due date</th>
        <th></th>
        <th>Status</th>
        <th>Total Amount</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      

        {
          data.map((data)=>{
            return(
              <tr>
              <td className='text-blue-500 underline'>{data.entry}</td>
              <td className='text-blue-500 underline'>{data.invoice}</td>
              <td>{data.supplier}</td>
              <td>{data.supplierName}</td>
              <td>{data.invoiceDate}</td>
              <td className='bg-red-100 text-red-500'>{data.dueDate}</td>
              <td ><GrAttachment /></td>
              <td >{data.status}</td>
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

export default UnpaidPurchaseInvoice