import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ArticleDetails = () => {
    const [data, setData] = useState([
        {
            article: "52",
            articleName: "Arslan",
            unit: "Pieces",
            price: "10,000",
            taxPrice: "11,000",
            stock:"100",
            selected: false, // Add a selected property for checkbox
          },
    
          {
            article: "52",
            articleName: "Arslan",
            unit: "Pieces",
            price: "10,000",
            taxPrice: "11,000",
            stock:"100",
            selected: false, // Add a selected property for checkbox
          },
    
          {
            article: "52",
            articleName: "Arslan",
            unit: "Pieces",
            price: "10,000",
            taxPrice: "11,000",
            stock:"100",
            selected: false, // Add a selected property for checkbox
          },
    
          {
            article: "52",
            articleName: "Arslan",
            unit: "Pieces",
            price: "10,000",
            taxPrice: "11,000",
            stock:"100",
            selected: false, // Add a selected property for checkbox
          },
    
          {
            article: "52",
            articleName: "Arslan",
            unit: "Pieces",
            price: "10,000",
            taxPrice: "11,000",
            stock:"100",
            selected: false, // Add a selected property for checkbox
          },
          {
            article: "52",
            articleName: "Arslan",
            unit: "Pieces",
            price: "10,000",
            taxPrice: "11,000",
            stock:"100",
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
              <th>Article no.</th>
              <th>Article name</th>
              <th>Unit</th>
              <th>Price excl. VAT</th>
              <th>Price incl. VAT</th>
              <th>Art. in stock</th>
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
                <Link to="/editarticle"><td className='text-blue-500 underline'>{item.article}</td></Link>
                <td>{item.articleName}</td>
                <td>{item.unit}</td>
                <td>{item.price}</td>
                <td>{item.taxPrice}</td>
                <td>{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ArticleDetails