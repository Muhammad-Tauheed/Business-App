import React, { useState } from 'react'

const BalanceSheet = () => {
  const [data, setData] = useState([
    {
      starting: "345,54",
      change: "0,00",
      end: "432,76",
      year: "432,98",
      entry:"234",
      date:"2024-2-24",
      distription:"black mobile"
    }
  ]);

  const [folder,setFolder]=useState([
    {
      name:"Output VAT on sales within Sweden",
      branch:"per month"

    },
    {
      name:"Sell goods EC VAT free",
      branch:"per month"

    }
  ])
  return (
    <>
      <div className='border bg-white flex flex-col py-3 px-3'>
        <div className='flex w-full'>
          <div className='w-1/2 flex flex-col justify-between gap-3'>
            <div className='flex items-center justify-between'>
              <label className='' htmlFor="gender">Show time period </label>
              <select className='border input-sm w-full max-w-xs'>
                <option value=""></option>
                <option value="male">PRK</option>
                <option value="female">ADE</option>
                <option value="nonbinary">US $</option>
                {/* Add more gender options as needed */}
              </select>
            </div>

            <div className='flex items-center justify-between'>
              <label htmlFor="datePicker">Invoice a date: </label>
              <div className='flex items-center gap-4'>
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
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <label className='' htmlFor="gender">Show columns </label>
              <select className='border input-sm w-full max-w-xs'>
                <option value=""></option>
                <option value="male">PRK</option>
                <option value="female">ADE</option>
                <option value="nonbinary">US $</option>
                {/* Add more gender options as needed */}
              </select>
            </div>
          </div>
        </div>

        <div className='divider'></div>

        {
          folder.map((folder)=>{
            return(
              <>
        <div className="collapse bg-base-200 mt-5">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            {folder.name}
          </div>
          <div className="collapse-content">

            <div className="collapse bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
              {folder.branch}

              </div>
              <div className="collapse-content">
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Entry no.</th>
                        <th>Transaction date</th>
                        <th>Discription</th>
                        <th>Starting balance</th>
                        <th>Change</th>
                        <th>End balance</th>
                        <th>Period prev. year</th>

                      </tr>
                    </thead>
                    {
                      data.map((data) => {
                        return (
                          <>
                            <tbody>
                              {/* row 1 */}
                              <tr>
                                <td>{data.entry}</td>
                                <td>{data.date}</td>
                                <td>{data.distription}</td>
                                <td>{data.starting}</td>
                                <td>{data.starting}</td>
                                <td>{data.starting}</td>
                                <td>{data.year}</td>
                              </tr>
                            </tbody>
                          </>
                        )
                      })
                    }
                  </table>
                </div>
              </div >
            </div>

          </div>
        </div>
              </>
            )
          })

        }


      </div >
    </>
  )
}

export default BalanceSheet




