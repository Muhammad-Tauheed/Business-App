import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import ReactApexChart from 'react-apexcharts';

const TipsATricks = () => {
  const [state, setState] = useState(
    {

      series: [{
        name: 'Revenues',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      }, {
        name: 'Coast',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      }, {
        name: 'Result',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },

        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
          '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
        ],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          title: {
            text: 'Points',
          },
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;

            }
          }
        }
      },


    }
  )
  return (
    <>
      <div className='flex flex-col'>


        <div className='flex flex-col border shadow-lg mt-[75px] '>
          <h1 className='text-2xl ml-5 mt-5'>Revenue, costs and profit/loss</h1>

          <div id="chart">
            <ReactApexChart className="max-2xl:h-[258px] max-xl:h-[350px]" options={state.options} series={state.series} type="line"/>
          </div>
          <div id="html-dist"></div>


          <div className='flex items-center justify-between w-100 px-20'>
            <div className='flex flex-col items-start  '>
              <span>Revenues</span>
              <span>Cost</span>
              <span>Result</span>
            </div>

            <div className='flex flex-col items-end'>
              <span>45,987</span>
              <span className='text-red-500'>0,00</span>
              <span>45,987</span>
            </div>
          </div>
        </div>
        <div className='border shadow-lg flex flex-col bg-white mt-5 px-5 py-5 max-xl:h-[459px] max-2xl:h-[380px]'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl '>Tips & Tricks</h1>
            <Link className='text-blue-500 underline'>Show all</Link>
          </div>

          <ul className='flex flex-col text-sm text-gray-500 gap-4 mt-5'>
            <li className='flex items-center gap-5'><IoIosArrowForward /> Best practice in E Networks eEconomi</li>
            <li className='flex items-center gap-5'><IoIosArrowForward /> Order e-invoice from your supplier</li>
            <li className='flex items-center gap-5'><IoIosArrowForward /> 4 ways to quick help</li>
            <li className='flex items-center gap-5'><IoIosArrowForward /> We will guide you in eAccounting</li>
            <li className='flex items-center gap-5'><IoIosArrowForward /> The card that automates your accounting</li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default TipsATricks