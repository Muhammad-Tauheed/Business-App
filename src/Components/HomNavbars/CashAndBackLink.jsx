import React from 'react'
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

const CashAndBackLink = () => {
    const { pathname } = useLocation();
    return (
        <>
            <Link to="/cashandbank" className='w-full'><li className={`flex justify-between w-full  ${pathname === "/cashandbank" ? "bg-zinc-700  hover:bg-zinc-800   font-semibold rounded-lg text-white " : ""}  `}>
                <a className='px-10 text-xl font-semibold max-2xl:text-[16px] max-xl:text-[14px] '>
                    <FaMoneyBillTransfer className="text-xl" /> <span className='max-xl:hidden'>Cash & bank</span>
                </a>
            </li></Link>
        </>
    )
}

export default CashAndBackLink