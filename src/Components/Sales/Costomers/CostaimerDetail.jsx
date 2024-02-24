import React, { useState } from 'react';

const CostaimerDetail = () => {
  const [data, setData] = useState([
    {
        customer: "52",
        costomerName: "Arslan",
        latestInvoice: "2024-2-23",
        unpaid: "10,000",
        total: "20,000",
        selected: false, // Add a selected property for checkbox
      },

    {
        customer: "52",
        costomerName: "Arslan",
        latestInvoice: "2024-2-23",
        unpaid: "10,000",
        total: "20,000",
        selected: false, // Add a selected property for checkbox
      },

      {
        customer: "52",
        costomerName: "Arslan",
        latestInvoice: "2024-2-23",
        unpaid: "10,000",
        total: "20,000",
        selected: false, // Add a selected property for checkbox
      },

      {
        customer: "52",
        costomerName: "Arslan",
        latestInvoice: "2024-2-23",
        unpaid: "10,000",
        total: "20,000",
        selected: false, // Add a selected property for checkbox
      },

      {
        customer: "52",
        costomerName: "Arslan",
        latestInvoice: "2024-2-23",
        unpaid: "10,000",
        total: "20,000",
        selected: false, // Add a selected property for checkbox
      },
      {
        customer: "52",
        costomerName: "Arslan",
        latestInvoice: "2024-2-23",
        unpaid: "10,000",
        total: "20,000",
        selected: false, // Add a selected property for checkbox
      },
    // Add more data objects as needed
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
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <button onClick={handleSelectAll}>Select All</button>
              </th>
              <th>Customer no.</th>
              <th>Costomer name</th>
              <th>Latest invoice</th>
              <th>Unpaid invoice</th>
              <th>Total sales past 12 mon</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {data.map((item, index,data) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => handleSelectSingle(index)}
                  />
                </td>
                <td className='text-blue-500 underline'>{item.customer}</td>
                <td>{item.costomerName}</td>
                <td>{item.latestInvoice}</td>
                <td className='bg-red-200 text-red-600'>{item.unpaid}</td>
                <td>{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CostaimerDetail;
