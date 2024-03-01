import React, { useState } from 'react'

const VehiclesDetail = () => {
    const [data,setData]=useState([
        {
          vehicle:"Pickup",
          driver:"Ali",
          Vnumber:"ABC - 123",
          Dnumber:"098-76543",
        },
        
      ])
  return (
    <>
    <div className="overflow-x-auto">
      <div className='flex items-center justify-start'>
    <input
				type='text'
				placeholder='🔍Search…'
				className='input input-bordered border-gray-600 w-[300px] py-1 rounded-full'
			/>
      </div>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
 
        <th>Driver</th>
        <th>Driver No.</th>
        <th>Vehicle</th>
        <th>Vehicle No.</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      

        {
          data.map((data)=>{
            return(
              <tr>
              <td>{data.driver}</td>
              <td>{data.Dnumber}</td>
              <td>{data.vehicle}</td>
              <td>{data.Vnumber}</td>
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

export default VehiclesDetail