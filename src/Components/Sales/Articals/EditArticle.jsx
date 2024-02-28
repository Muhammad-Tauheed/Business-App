import React from 'react'
import TopBar from '../../HomNavbars/TopBar'
import Sidebar from '../../HomNavbars/Sidebar'
import ArticleBasicInfo from './ArticleBasicInfo'
import SalesDetails from './SalesDetails'
import ArticleSock from './ArticleSock'

const EditArticle = () => {
  return (
    <>
    <div className='h-full bg-gray-100 overflow-y-scroll' >
<div className='fixed w-screen z-50'>
    <TopBar />
</div>
<div className='flex'>
    <div className='lg:w-1/5 bg-black fixed h-full mt-[50px]'>
        <Sidebar />
    </div>
    <div className='lg:w-full px-8 py-5 ml-[300px] mt-[50px] '>
        <h1 className='text-3xl '>Edit article</h1>

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

export default EditArticle