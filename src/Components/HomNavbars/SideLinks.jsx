import React, { useState } from 'react'
import { BsBoxArrowLeft, BsBoxArrowRight } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { SlWallet } from "react-icons/sl";
import { IoIosApps } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import StatrLink from './StatrLink';
import SalesLink from './SalesLink';
import PurchasingLink from './PurchasingLink';
import AccountingLink from './AccountingLink';
import CashAndBackLink from './CashAndBackLink';

const SideLinks = () => {
    const { pathname } = useLocation();


    return (
        <ul className={`flex-1  menu menu-horizontal overflow-hidden transition-all text-white py-20 mb-10 -mt-10`} >

           <StatrLink/>
           <SalesLink/>
           <PurchasingLink/>

            <li className='flex justify-between w-full '>
                <a className='px-10 text-xl font-semibold max-2xl:text-[16px] max-xl:text-[14px] '>
                    <GiWallet className="text-xl" /> <span className='max-xl:hidden'>Payroll</span>
                </a>
            </li>

            <CashAndBackLink/>

            <AccountingLink/>

            <li className='w-full'>
                <details className='flex justify-between w-full'>
                    <summary className='px-10 text-xl font-semibold max-2xl:text-[16px] max-xl:text-[17px] '>
                        <IoMdSettings className="text-xl" /> <span className='max-xl:hidden'>Settings</span>
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none z-20 w-full">
                        <li className='hover:bg-indigo-800 font-semibold hover:text-white'>
                            <a>Link 1</a>
                        </li>
                        <li className='hover:bg-indigo-800 font-semibold hover:text-white'>
                            <a>Link 2</a>
                        </li>
                    </ul>
                </details>
            </li>

            <li className='flex justify-between w-full'>
                <a className='px-10 text-[16px] font-semibold'>
                    <SlWallet className="text-xl" /> <span className='max-xl:hidden'>Financing</span>
                </a>
            </li>

            <li className='flex justify-between w-full'>
                <a className='px-10 text-[16px] font-semibold'>
                    <IoIosApps className="text-xl" /> <span className='max-xl:hidden'>Apps</span>
                </a>
            </li>



        </ul>
    )
}

export default SideLinks

