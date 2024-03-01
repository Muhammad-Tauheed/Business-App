import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const GroupsDetails = () => {
    const [data, setData] = useState([
        {
            name: "Ahmad",
            number: "0987654",
            status: "Developer",
            selected: false, // Add a selected property for checkbox
        },
        {
            name: "Ali",
            number: "0987654",
            status: "Designer",
            selected: false, // Add a selected property for checkbox
        },
    ]);

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
             <div className="overflow-x-auto">
      <div className='flex items-center justify-evenly'>
    <input
				type='text'
				placeholder='🔍Search…'
				className='input input-bordered border-emerald-600 w-[300px] py-1 rounded-full'
			/>

      <div>
      <div className='flex gap-5'>
      <label htmlFor="datePicker">Invoice a date: </label>
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
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <button onClick={handleSelectAll}>Select All</button>
                            </th>
                            <th>Group Name</th>
                            <th>Group Leader No.</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {/* rows */}
                    {data.map((item, index, data) => (
                        <tbody className='hover:bg-gray-200'>
                            <tr key={index}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={item.selected}
                                        onChange={() => handleSelectSingle(index)}
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.number}</td>
                                <td>{item.status}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </>
    );
};

export default GroupsDetails