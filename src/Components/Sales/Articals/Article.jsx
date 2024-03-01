import React from 'react'
import TopBar from '../../HomNavbars/TopBar'
import Sidebar from '../../HomNavbars/Sidebar'

import { Link } from 'react-router-dom'
import ArticalDetails from './ArticleDetails'

const Article = () => {
  return (
    <>
    <div className='h-full bg-gray-100 overflow-y-scroll' >
        <div className='fixed w-screen z-50'>
            <TopBar  />
        </div>
        <div className='flex'>
            <div className='max-2xl:w-1/5 max-xl:w-1/12 bg-black fixed h-full mt-[50px] overflow-hidden'>
                <Sidebar />
            </div>
            <div className='w-full px-8 max-2xl:ml-[250px] max-xl:ml-[100px] mt-[50px] overflow-x-hidden'>
                <div className='flex w-100 items-center justify-between py-5'>
                <h1 className='text-3xl '>Articles</h1>
               <Link to="/newarticles"><button className='btn w-52 text-white bg-gray-600 hover:bg-gray-400'>New Article</button></Link> 
                </div>
                <div className='bg-white border px-2 py-5'>
                    <div className='flex items-center justify-start gap-20 '>
                        <input
                            type='text'
                            placeholder='🔍Search…'
                            className='input input-bordered border-indigo-800 w-[300px] py-1 rounded-full'
                        />
                        <div>
                            <label className='text-lg font-semibold ' htmlFor="gender">Article labels </label>
                            <select className='border w-60 rounded-xl py-2'>
                                <option value=""></option>
                                <option value="male">Normal</option>
                                <option value="female">Good</option>
                                <option value="nonbinary">Very Good</option>
                                {/* Add more gender options as needed */}
                            </select>
                        </div>
                    </div>
                    <div className='divider'></div>
                <ArticalDetails/>
                    <div className='divider'></div>
                    <div className='flex w-100 items-center justify-between'>
                        <button className='btn shadow-lg bg-blue-600 hover:bg-blue-800 text-white'>Process multiple customers</button>
                        <span className='text-gray-500 text-sm'>Showing 26 of 26 items </span>

                    </div>
                </div>
            </div>
        </div>
    </div>

</>
  )
}

export default Article