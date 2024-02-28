import React from 'react'
import JournalDetails from './JournalDetails'

const SavedJournalEntries = () => {
  return (
    <>
            <div className='flex flex-col'>
                <div className='w-full flex items-center justify-evenly'>
                    <   div className='lg:1/2'>
                        <input
                            type='text'
                            placeholder='🔍Search…'
                            className='input input-bordered border-emerald-600 w-[300px] py-1 rounded-full'
                        />
                    </div>

                    <div className='lg:w-1/2 flex flex-col'>
                        <div className='flex items-center w-full justify-between mt-2'>
                            <label className='' htmlFor="gender">Show time peri...</label>
                            <select className='border w-full input-sm  max-w-xs'>
                                <option value=""></option>
                                <option value="male">PRK</option>
                                <option value="female">ADE</option>
                                <option value="nonbinary">US $</option>
                                {/* Add more gender options as needed */}
                            </select>
                        </div>

                        <div className='flex items-center w-full justify-between mt-2'>
                            <label className='' htmlFor="gender">Transaction data</label>
                            <input
                                type="date"
                                id="datePicker"
                                name="datePicker"
                                className='border border-black'
                            />
                            -
                            <input
                                type="date"
                                id="datePicker"
                                name="datePicker"
                                className='border border-black'
                            />
                            <label htmlFor="datePicker">Status </label>

                        </div>
                    </div>

                </div>
                
                <JournalDetails/>
                <div className='divider'></div>
              <div className='flex w-100 items-center justify-between'>
                <div className='flex '>
                <button className='btn shadow-lg bg-blue-600 hover:bg-blue-800 text-white'>Process multiple</button>
                </div>
                <span className='text-gray-500 text-sm'>Showing 26 of 26 items </span>
              </div>

            </div>




        </>
  )
}

export default SavedJournalEntries