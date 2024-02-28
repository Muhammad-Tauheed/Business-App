import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai';
import { HiMinusCircle } from 'react-icons/hi';

const JournalInputs = () => {
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState([
        {
            article: '0032',
            articalName: 'mobile',
            quantity: '1,00',
            units: 'st',
            price: '10,789',
            descount: '0,00 %',
            vat: '0,00 %',
        },
    ]);

    const add = () => {
        // Use the last item in the data array as the template for the new item
        const lastItem = data[data.length - 1];

        // Create a new item with the same data as the last item
        const newItem = {
            article: lastItem.article,
            articalName: lastItem.articalName,
            quantity: lastItem.quantity,
            units: lastItem.units,
            price: lastItem.price,
            descount: lastItem.descount,
            vat: lastItem.vat,
        };

        // Update the data state with the new item
        setData([...data, newItem]);
    };

    const sub = () => {
        // Check if there is more than one item before allowing subtraction
        if (data.length > 1) {
            setCounter(counter - 1);

            // Remove the last item from the data state
            setData(data.slice(0, -1));
        }
    };
  return (
    <>

    <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>Account</th>
                    <th>VAT code</th>
                    <th>Dwbit</th>
                    <th>Credit</th>
                    <th>BAlance</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                {data.map((item, index) => (
                    <tr key={index}>
                        <td><input type="text" placeholder="Enter account or search word" className="input input-bordered input-sm w-full max-w-xs" /></td>
                        <td><input type="text" placeholder="" className="input input-bordered input-sm w-40 max-w-xs" /></td>
                        <td><input type="text" placeholder="0,00" className="input input-bordered input-sm w-full max-w-xs" /></td>
                        <td><input type="text" placeholder="0,00" className="input input-bordered input-sm w-40 max-w-xs" /></td>
                        <td>
                            <div className="flex items-center gap-2">
                                <button onClick={sub} className="text-red-500 text-2xl">
                                    <HiMinusCircle />
                                </button>
                                <button onClick={add} className="text-green-500 text-2xl">
                                    <AiFillPlusCircle />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</>
  )
}

export default JournalInputs