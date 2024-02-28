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
      <div className='lg:w-1/5 bg-black fixed h-full mt-[50px]'>
          <Sidebar />
        </div>

        <div className='lg:w-full px-5 ml-[300px] mt-[50px]'>
          <StartPage/>
        </div>
        <div className='lg:w-1/2  mt-[50px]'>
         <TipsATricks/>
        </div>

      </div>


    </div>
  )
}

export default Home





{/* <div className='h-full bg-white'>
<div className='fixed w-screen z-50'>
      <TopBar />
</div>


      <div className='flex'>
        <div className='lg:w-1/5 bg-black fixed h-full mt-[50px]'>
          <Sidebar />
        </div>

        <div className=' px-5 ml-[300px] mt-[50px]'>
          <StartPage />
        </div>
        
        

      </div>

    </div> */}