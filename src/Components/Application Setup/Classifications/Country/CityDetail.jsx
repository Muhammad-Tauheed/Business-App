import React, { useState } from 'react'

const CityDetail = () => {
    const [data, setData] = useState([
        {
            city: "Lahore",
            order: "15",
            date:"2024-2-24"
        },
        {
            city: "Karachi",
            order: "16",
            date:"2024-2-24"
        },
        {
            city: "Rawal Pindi",
            order: "17",
            date:"2024-2-24"
        },

    ])
    return (
        <>
            <div className="overflow-x-auto">
                <div className='flex items-center justify-start'>
                    <input
                        type='text'
                        placeholder='🔍Search…'
                        className='input input-bordered border-gray-600 w-[300px] py-1 rounded-full'
                    />
                    <div>


                    </div>
                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Sort Order</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    {/* row 1 */}


                    {
                        data.map((data) => {
                            return (
                                <tbody className='hover:bg-gray-200'>
                                    <tr>
                                        <td>{data.city}</td>
                                        <td>{data.order}</td>
                                        <td>{data.date}</td>
                                    </tr>
                                </tbody>

                            )
                        })
                    }

                </table>
            </div>
        </>
    )
}

export default CityDetail