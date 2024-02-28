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
      <div className='h-full bg-gray-100 overflow-y-scroll' >
        <div className='fixed w-screen z-50'>
          <TopBar />
        </div>
        <div className='flex'>
          <div className='max-2xl:w-1/5 max-xl:w-1/12 bg-black fixed h-full mt-[50px] overflow-hidden'>
            <Sidebar />
          </div>
          <div className='w-full px-8 max-2xl:ml-[250px] max-xl:ml-[100px] mt-[50px] overflow-x-hidden'>
              <h1 className='text-3xl mt-5'>New sales invoice</h1>
              <div className='bg-white border px-2 mt-5 pt-5 pb-16'>
                <div className='flex w-full bg-white  py-2 border-b'>
                  <div className='flex flex-col gap-5'>
                    <div className='flex max-2xl:gap-16 max-xl:gap-2'>
                      <span>Costomer</span>
                      <input type="text" placeholder="Type here" className="border input-sm w-full max-w-xl" />
                    </div>

                    <div className='flex max-2xl:gap-11 max-xl:gap-2'>
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

                    <div className='flex max-2xl:gap-7 max-xl:gap-2'>
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

                <BillScree />
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
                <div className="navbar bg-white fixed bottom-0 z-50 max-2xl:w-[1100px] max-xl:w-[830px] shadow-xl">
                  <div className="flex w-full justify-between ">
                    <div className='flex gap-2'>
                      <button className='btn w-40 shadow-lg bg-gray-300'>Preview</button>
                      <button className='btn w-40 shadow-lg bg-gray-300'>period allocation</button>
                    </div>
                    <div className='flex gap-2'>
                      <button className='btn w-40 shadow-lg bg-blue-600  hover:bg-blue-800  text-white'>Create PDF</button>
                      <button className='btn w-40 shadow-lg bg-red-600  text-white hover:text-black'>Cancle </button>
                    </div>
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







