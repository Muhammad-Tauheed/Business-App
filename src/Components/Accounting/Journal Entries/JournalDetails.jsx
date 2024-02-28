import React, { useState } from 'react'

const JournalDetails = () => {
    const [data,setData]=useState([
        {
            entry:"234",
            description:"3 black color mobile",
            type:"Sales invoice",
            date:"2024-2-24",
            ammount:"20,000"
        },
        {
            entry:"234",
            description:"3 black color mobile",
            type:"Sales invoice",
            date:"2024-2-24",
            ammount:"20,000"
        },
        {
            entry:"234",
            description:"3 black color mobile",
            type:"Sales invoice",
            date:"2024-2-24",
            ammount:"20,000"
        },
        {
            entry:"234",
            description:"3 black color mobile",
            type:"Sales invoice",
            date:"2024-2-24",
            ammount:"20,000"
        },
    ])
  return (
    <>
    <table className="table">
    {/* head */}
    <thead>
      <tr>
 
        <th>Entry</th>
        <th>Description</th>
        <th>Transaction type</th>
        <th>Transaction data</th>
        <th>Ammount</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      

        {
          data.map((data)=>{
            return(
              <tr>
              <td className='text-blue-500 underline'>{data.entry}</td>
              <td className=''>{data.description}</td>
              <td>{data.type}</td>
              <td>{data.date}</td>
              <td>{data.ammount}</td>
              </tr>

            )
          })
        }
       
    </tbody>
  </table>
    </>
  )
}

export default JournalDetails