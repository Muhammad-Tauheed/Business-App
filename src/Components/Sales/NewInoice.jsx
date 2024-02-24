import React, { useState } from 'react'
import TopBar from '../HomNavbars/TopBar'
import Sidebar from '../HomNavbars/Sidebar'
import BillScree from './BillScree';
import { ImAttachment } from "react-icons/im";

const NewInoice = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <>
      <div className='h-full bg-gray-100' >
      <div className='fixed w-screen z-50'>
      <TopBar />
</div>
<div className='flex'>
      <div className='lg:w-1/5 bg-black fixed h-full mt-[50px]'>
          <Sidebar />
        </div>
          <div className='lg:w-full px-8 ml-[300px] mt-[50px]'>
            <h1 className='text-3xl mt-5'>New sales invoice</h1>
            <div className='bg-white border px-2 mt-5'>
              <div className='flex w-full bg-white  py-2 border-b'>
                <div className='flex flex-col gap-5'>
                  <div className='flex gap-16'>
                    <span>Costomer</span>
                    <input type="text" placeholder="Type here" className="border input-sm w-full max-w-xl" />
                  </div>

                  <div className='flex gap-11'>
                    <label htmlFor="datePicker">Invoice Date:</label>
                    <input
                      type="date"
                      id="datePicker"
                      className='border w-[190px]'
                    />
                    <label className='ml-[-2px]' htmlFor="datePicker ">Due Date:</label>
                    <input
                      type="date"
                      id="datePicker"
                      className='border  w-[191px]'
                    />

                  </div>

                  <div className='flex gap-7'>
                    <label htmlFor="referenceInput">Your reference:</label>
                    <input
                      type="text"
                      id="referenceInput"
                      className='border'
                      placeholder='Your rafrance'
                    />

                    <label htmlFor="referenceInput">Our reference:</label>
                    <input
                      type="text"
                      id="referenceInput"
                      className='border'
                      placeholder='Our rafrance'
                    />
                  </div>
                </div>
                <div className='flex flex-col ml-5 gap-6'>
                  <fieldset className="gendermain flex gap-20 ">
                    <label className="flex " >
                      <input type="radio" name="gender" value="male" className='checkbox' /> Credit note
                    </label>
                    <label className="flex ">
                      <input type="radio" name="gender" value="female" className='checkbox ' /> Recurring invoice
                    </label>

                  </fieldset>

                  <div className='flex '>
                  <label htmlFor="datePicker ">Delivery Date:</label>
                    <input
                      type="date"
                      id="datePicker"
                      className='border ml-[85px]'
                    />
                  </div>

                  <div className='flex'>
                  <label htmlFor="referenceInput">Your order reference:</label>
                    <input
                      type="text"
                      id="referenceInput"
                      className='border ml-[35px]'
                      placeholder='Our order'
                    />
                  </div>
                </div>
              </div>

              <BillScree/>
              <div className='flex items-end justify-between py-5'>
                <div className='flex flex-col items-center border py-3 bg-purple-200 px-2 cursor-pointer text-gray-500 gap-2'>
                <ImAttachment className='h-8 w-8' />
                Attaced Document
                </div>

                <div className='flex flex-col items-center  py-3 w-[400px]  cursor-pointer text-gray-500 '>
                  <div className='flex justify-between w-full'>
                    <span>Sum:</span>
                    <span>0,00</span>
                  </div>

                  <div className='flex justify-between w-full'>
                    <span>VAT:</span>
                    <span>0,00</span>
                  </div>

                  <div className='flex justify-between w-full'>
                    <span>Rounding:</span>
                    <span>0,00</span>
                  </div>
                  <div className='divider'></div>
                  <div className='flex justify-between w-full'>
                    <span>Total:</span>
                    <span>0,00</span>
                  </div>
                </div>
              </div>
              <div className='divider'></div>
                <div className='flex w-100 justify-between items-center pb-5'>
                  <div className='flex gap-2'>
                    <button className='btn w-40 shadow-lg bg-gray-300'>Preview</button>
                    <button className='btn w-40 shadow-lg bg-gray-300'>period allocation</button>
                  </div>
                  <div className='flex gap-2'>
                  <button className='btn w-40 shadow-lg bg-indigo-800 text-white hover:text-black'>Create PDF</button>
                    <button className='btn w-40 shadow-lg bg-red-600  text-white hover:text-black'>Cancle </button>

                  </div>


                </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default NewInoice