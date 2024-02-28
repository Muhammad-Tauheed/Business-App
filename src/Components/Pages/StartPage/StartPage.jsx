import React, { useState } from 'react'
import Chart from "react-apexcharts";

const StartPage = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [4, 5, 6, 7, 8, 9, 10, 11, 12],
        text: "Weeks"
      }
    },
    series: [
      {
        name: "series-1",
        data: [20, 50, 75, 40, 35, 60, 85, 80, 90]
      }
    ]

  })
  return (
    <>


      <div className='flex flex-col'>
        <h1 className='text-3xl ml-5 mt-5'>Start page</h1>

        <div className='border shadow-lg max-2xl:flex max-xl:items-center max-xl:flex-col max-2xl:justify-between mt-5'>
          <div className='max-2xl:border-r flex flex-col'>
            <h1 className='text-2xl ml-5 mt-5'>Sales & Purchase invoices</h1>
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              className="max-2xl:w-[500px] max-xl:w-[460px]"
            />
          </div>
          <div className='w-full max-xl:flex max-xl:gap-10 max-xl:justify-center max-xl:items-center max-xl:flex-row max-2xl:flex max-2xl:flex-col pt-7 px-1'>
            <div className='flex flex-col'>
              <span className=' max-xl:text-nonwrap max-xl:text-sm font-bold text-gray-600'>Sale invoice</span>
              <span className=' max-xl:text-[13px] text-gray-600'>Overdue , 9pcs</span>
              <span className=' max-xl:text-sm text-red-500'>0,00</span>
              <span className=' max-xl:text-[13px] text-gray-600'>Not overdue , 0pcs</span>
              <span className=' max-xl:text-sm text-gray-600'>0,00</span>
            </div>


            <div className='flex flex-col max-xl:-mt-5'>
              <span className=' max-xl:text-sm font-bold text-gray-600 mt-5'>Purchase invoice </span>
              <span className=' max-xl:text-[13px] text-gray-600'>Overdue , 82pcs</span>
              <span className=' max-xl:text-sm text-red-500'>0,00</span>
              <span className=' max-xl:text-[13px] text-gray-600'>Not overdue , 0pcs</span>
              <span className=' max-xl:text-sm text-gray-600'>0,00</span>
            </div>
          </div>
        </div>

        <div className='border shadow-lg max-2xl:flex max-xl:items-center max-xl:flex-col max-2xl:justify-between mt-5'>
          <div className='max-2xl:border-r flex flex-col'>
            <h1 className='text-2xl ml-5 mt-5'>Cash flow prognosis</h1>
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              className="max-2xl:w-[500px] max-xl:w-[460px]"
            />
          </div>
          <div className='w-full max-xl:flex max-xl:gap-10 max-xl:justify-center max-xl:items-center max-xl:flex-row max-2xl:flex max-2xl:flex-col pt-7 px-1'>

            <div className='flex flex-col'>
              <span className=' max-xl:text-sm font-bold text-gray-600'>Sale invoice</span>
              <span className=' max-xl:text-[13px] text-gray-600'>Overdue , 9pcs</span>
              <span className=' max-xl:text-sm text-red-500'>0,00</span>
              <span className=' max-xl:text-[13px] text-gray-600'>Not overdue , 0pcs</span>
              <span className=' max-xl:text-sm text-gray-600'>0,00</span>
            </div>
            <div className='flex flex-col max-xl:-mt-5'>
              <span className=' max-xl:text-sm font-bold text-gray-600 mt-5'>Purchase invoice </span>
              <span className=' max-xl:text-[13px] text-gray-600'>Overdue , 82pcs</span>
              <span className=' max-xl:text-sm text-red-500'>0,00</span>
              <span className=' max-xl:text-[13px] text-gray-600'>Not overdue , 0pcs</span>
              <span className=' max-xl:text-sm text-gray-600'>0,00</span>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default StartPage