import React from 'react'
import Sidebar from '../HomNavbars/Sidebar'
import SaleOverview from '../Sales/SaleInvoice'
import TopBar from '../HomNavbars/TopBar'
import StartPage from './StartPage/StartPage'
import TipsATricks from './StartPage/TipsAndTricks'

const Home = () => {
  return (
    <div className='h-full bg-white overflow-y-scroll' >


<div className='fixed w-screen z-50'>
      <TopBar />
</div>

      <div className='flex'>
      <div className='max-2xl:w-1/5 max-xl:w-1/12 bg-black fixed h-full mt-[50px] overflow-hidden'>
          <Sidebar />
        </div>

        <div className='max-2xl:w-2/3 max-xl:w-1/2 px-5 max-2xl:ml-[250px] max-xl:ml-[80px] mt-[50px]'>
          <StartPage/>
        </div>
        <div className='max-xl:w-1/2 max-2xl:w-1/3  mt-[50px]'>
         <TipsATricks/>
        </div>

      </div>


    </div>
  )
}

export default Home



