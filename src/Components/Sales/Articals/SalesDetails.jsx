import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SalesDetails = () => {
    const [data, setData] = useState([
        {
            name: "mobile",
            price: "10,000",
            taxPrice: "11,000",
            currency: "PKR",
            cm: "0,00",
            cmPER: "0,00",
        },
    ])
    const handleSelectAll = () => {
        setData((prevData) =>
            prevData.map((item) => ({
                ...item,
                selected: !item.selected,
            }))
        );
    };

    const handleSelectSingle = (index) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData[index].selected = !newData[index].selected;
            return newData;
        });
    };

    return (
        <>

            <div className='border-b w-100 mt-10'>
                <h1 className='text-xl'>Sales details</h1>
            </div>

            <div className='flex justify-between items-center'>
                <span>Sale category</span>
                <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
            </div>

            <div className='flex items-center justify-between'>
                <label className='' htmlFor="gender">Units </label>
                <select className='border input-sm w-full max-w-xs'>
                    <option value=""></option>
                    <option value="male">pcs</option>
                    <option value="female">kg</option>
                    <option value="nonbinary">ml</option>
                    {/* Add more gender options as needed */}
                </select>
            </div>

            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Price excl. VAT</th>
                            <th>Price incl. VAT</th>
                            <th>Currency</th>
                            <th>CM</th>
                            <th>CM%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="bg-base-200">
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td><input type="text" placeholder="0,00" className="input input-bordered input-sm w-full max-w-xs" /></td>
                                <td><input type="text" placeholder="0,00" className="input input-bordered input-sm w-full max-w-xs" /></td>
                                <td>{item.currency}</td>
                                <td>{item.cm}</td>
                                <td>{item.cmPER}</td>
                                {/* Include other columns as needed */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    )
}

export default SalesDetails