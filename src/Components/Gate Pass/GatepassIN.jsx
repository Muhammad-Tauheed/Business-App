import React, { useState } from 'react'

const GatepassIN = () => {
  const [data, setData] = useState([
    {
      date: "2024-2-24",
      transaction: "ABC-123DEF",
      vendor: "Pakistan Traders",
      location: "Head Office",
      status: "APPROVED",
    },
    {
      date: "2024-2-24",
      transaction: "ABC-123DEF",
      vendor: "Pakistan Traders",
      location: "Head Office",
      status: "APPROVED",
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

              <th>Date</th>
              <th>Transaction no.</th>
              <th>Vendor</th>
              <th>Location Name</th>
              <th>Status</th>
            </tr>
          </thead>

          {/* row 1 */}


          {
            data.map((data) => {
              return (
                <tbody>
                  <tr className='hover:bg-gray-200'>
                    <td>{data.date}</td>
                    <td>{data.transaction}</td>
                    <td>{data.vendor}</td>
                    <td>{data.location}</td>
                    <td>{data.status}</td>
                  </tr>
                </tbody>
              )
            })
          }

        </table>
      </div>
    </>
  )
}

export default GatepassIN