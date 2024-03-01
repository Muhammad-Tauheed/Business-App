import React, { useState } from 'react'

const CountryDetail = () => {
    const [data, setData] = useState([
        {
            country: "Pakistan",
            code: "+92",
        },
        {
            country: "Pakistan",
            code: "+92",
        },
        {
            country: "Pakistan",
            code: "+92",
        },
        {
            country: "Pakistan",
            code: "+92",
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
                            <th>Country</th>
                            <th>Country Code</th>
                        </tr>
                    </thead>
                    {/* row 1 */}


                    {
                        data.map((data) => {
                            return (
                                <tbody className='hover:bg-gray-200'>
                                    <tr>
                                        <td>{data.country}</td>
                                        <td>{data.code}</td>
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

export default CountryDetail