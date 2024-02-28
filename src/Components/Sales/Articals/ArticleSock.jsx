import React from 'react'

const ArticleSock = () => {
  return (
    <>
      <div className='border-b w-100'>
        <h1 className='text-xl'>Sock</h1>
      </div>

      <div className='flex justify-between items-center'>
        <span>Sock balance </span>
        <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
      </div>

      <div className='flex justify-between items-center'>
        <span>Manially adjusted</span>
      </div>

      <div className='border-b w-100 mt-10'>
        <h1 className='text-xl'>Purchase</h1>
      </div>

      <div className='flex justify-between items-center'>
        <span>Purchase price excl. VAT</span>
        <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
      </div>

      <div className='flex justify-between items-center'>
        <span>Last changed</span>
      </div>

      <div className='border-b w-100 mt-10'>
        <h1 className='text-xl'>Artical Labels</h1>
      </div>

      <div className='flex justify-between items-center'>
        <span>Artical tagged with</span>
        <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
      </div>

    </>
  )
}

export default ArticleSock