import React, { useState } from 'react'
import Chart from "react-apexcharts";

const StartPage = () => {
    const [state,setState]=useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [4, 5, 6, 7, 8, 9, 10, 11,12]
          }
        },
        series: [
          {
            name: "series-1",
            data: [20, 50, 75, 40, 35, 60, 85, 80,90]
          }
        ]
        
      })
  return (
    <>
  

    <div className='flex flex-col'>
      <h1 className='text-3xl ml-5 mt-5'>Start page</h1>

    <div className='border shadow-lg flex  items-start mt-5 '>
        <div className='border-r flex flex-col'>
    <h1 className='text-2xl ml-5 mt-5'>Sale & Purchase</h1>
    <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="500"
            />
    </div>
    <div className='w-full  flex flex-col items-end pt-7 px-5'>
        <span className='text-xl font-bold text-gray-600'>Sale invoice</span>
        <span className='text-lg text-gray-600'>Overdue , 9pcs</span>
        <span className='text-xl text-red-500'>0,00</span>
        <span className='text-lg text-gray-600'>Not overdue , 0pcs</span>
        <span className='text-xl text-gray-600'>0,00</span>

        <span className='text-xl font-bold text-gray-600 mt-5'>Purchase invoice </span>
        <span className='text-lg text-gray-600'>Overdue , 82pcs</span>
        <span className='text-xl text-red-500'>0,00</span>
        <span className='text-lg text-gray-600'>Not overdue , 0pcs</span>
        <span className='text-xl text-gray-600'>0,00</span>
    </div>
    </div>

    <div className='border shadow-lg flex  items-start mt-5 '>
        <div className='border-r flex flex-col'>
    <h1 className='text-2xl ml-5 mt-5'>Sale & Purchase</h1>
    <Chart
    options={state.options}
    series={state.series}
    type="line"
    width="500"
  />
    </div>
    <div className='w-full  flex flex-col items-end pt-7 px-5'>
        <span className='text-xl font-bold text-gray-600'>Sale invoice</span>
        <span className='text-lg text-gray-600'>Overdue , 9pcs</span>
        <span className='text-xl text-red-500'>0,00</span>
        <span className='text-lg text-gray-600'>Not overdue , 0pcs</span>
        <span className='text-xl text-gray-600'>0,00</span>

        <span className='text-xl font-bold text-gray-600 mt-5'>Purchase invoice </span>
        <span className='text-lg text-gray-600'>Overdue , 82pcs</span>
        <span className='text-xl text-red-500'>0,00</span>
        <span className='text-lg text-gray-600'>Not overdue , 0pcs</span>
        <span className='text-xl text-gray-600'>0,00</span>
    </div>
    </div>
    </div>



    </>
  )
}

export default StartPage