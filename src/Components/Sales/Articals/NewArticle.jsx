import React from 'react'
import TopBar from '../../HomNavbars/TopBar'
import Sidebar from '../../HomNavbars/Sidebar'
import { Link } from 'react-router-dom'
import SalesDetails from './SalesDetails'
import ArticleBasicInfo from './ArticleBasicInfo'
import ArticleSock from './ArticleSock'

const NewArticals = () => {
    return (
        <>
            <div className='h-full bg-gray-100 overflow-y-scroll' >
        <div className='fixed w-screen z-50'>
            <TopBar />
        </div>
        <div className='flex'>
            <div className='max-2xl:w-1/5 max-xl:w-1/12 bg-black fixed h-full mt-[50px] overflow-hidden'>
                <Sidebar />
            </div>
            <div className='w-full px-8 max-2xl:ml-[250px] max-xl:ml-[100px] mt-[50px] overflow-x-hidden'>
                <h1 className='text-3xl '>Add new artical</h1>

                <div className='bg-white border pt-4 pb-20 mt-10'>
                    <div className="flex w-100 ">
                        <div className='lg:w-1/2 pl-2 pr-5 flex flex-col gap-2'>
                            {/* Basic information  */}
                            <ArticleBasicInfo/>

                            {/* sales Details  */}
                            <SalesDetails/>
                        </div>

                        <div className='lg:w-1/2 flex flex-col px-2 gap-2'>
                            {/* Sock  */}
                            <ArticleSock/>
                           
                        </div>
                    </div>
                </div>
                <div className="navbar bg-white fixed bottom-0 z-50 w-[975px] shadow-xl">
                            <div className="flex w-full justify-between">
                            <div className='flex gap-2'>
                                    <button className='btn w-40 shadow-lg bg-gray-300 hover:text-black '>pseudonymise</button>
                                </div>
                                <div className='flex gap-2'>
                                    <button className='btn w-40 shadow-lg bg-blue-600 hover:bg-blue-800 text-white'>Save</button>
                                    <button className='btn w-40 shadow-lg bg-red-600  text-white hover:text-black'>Cancle</button>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default NewArticals
