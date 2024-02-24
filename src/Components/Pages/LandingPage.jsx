import React from 'react'
import Navbar from '../Navbar'

const LandingPage = () => {
    const landingPageStyles = {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'top',
    };
  return (
    <>
    <Navbar/>
    <div style={landingPageStyles} className='flex flex-col h-full items-start justify-center'>
        <div className='flex flex-col ml-40'>
           <p className='text-4xl text-white'>We Protect</p> 
          <p className='text-7xl text-white'>What's Important</p> 
          <p className='text-white text-sm mt-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi laudantium, <br /> 
          ea, in fugit tenetur et ratione delectus omnis, similique assumenda asperiores. <br /> 
          Autem nulla eaque nam. 
           Vero modi dolore temporibus tempora!</p>

           <button className='btn btn-ghost mt-5 text-white border-white'>More about Us?</button>
        </div>
    </div>
    <div className='bg-rose-500 mt-[-24px] px-5 text-white bg-clip-padding backdrop-filter bg-opacity-50 flex items-center justify-center'>
Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>

    </>
  )
}

export default LandingPage