import React, { useState } from 'react'
import TopBar from '../../HomNavbars/TopBar';
import Sidebar from '../../HomNavbars/Sidebar';
import { ImAttachment } from 'react-icons/im';
import JournalInputs from './JournalInputs';

const NewJournal = () => {
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
            <h1 className='text-3xl mt-5'>New journal entry</h1>
            <div className='bg-white border px-2 mt-5'>
              <div className='flex w-full bg-white  py-2 border-b'>
                <div className='flex flex-col w-1/2 gap-3 pr-2'>

                <div className='flex w-full justify-between items-center'>
                    <span>Date:</span>
                    <input
                      type="date"
                      id="datePicker"
                      className='border w-[190px]'
                    />
                  </div>

                  <div className='flex w-full justify-between items-center'>
                    <span>Accounting temp...</span>
                    <input type="text" placeholder="Type here" className=" border input-sm w-full max-w-xs" />
                  </div>

                  <div className='flex w-full justify-between items-center'>
                    <span >Description</span>
                    <input type="text" placeholder="Type here" className=" border input-sm w-full max-w-xs" />
                  </div>

                  <div className='flex w-full justify-between items-center'>
                <label className="flex gap-2" >
                      <input type="radio" name="gender" value="male" className='checkbox' /> Ammounts incl. VAT
                    </label>
                  </div>

                </div>
               
                <div className='flex flex-col w-1/2  pl-2 gap-3'>
                </div>
              </div>
                  <JournalInputs/>

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
      </div>


    </>
  )
}

export default NewJournal