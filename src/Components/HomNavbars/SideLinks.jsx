import React from 'react'
import { GiWallet } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { SlWallet } from "react-icons/sl";
import { IoIosApps } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import StatrLink from './StatrLink';
import SalesLink from './SalesLink';
import PurchasingLink from './PurchasingLink';
import AccountingLink from './AccountingLink';
import CashAndBackLink from './CashAndBackLink';
import ManufacturingLink from './ManufacturingLink';
import CompanySetup from './CompanySetup';

const SideLinks = () => {
    const { pathname } = useLocation();


    return (
        <ul className={`flex-1  menu menu-horizontal overflow-hidden transition-all text-white py-20 mb-10 -mt-10`} >

           <StatrLink/>
           <SalesLink/>
           <PurchasingLink/>
            <AccountingLink/>
            <CompanySetup/>
            <ManufacturingLink/>

            <li className='flex justify-between w-full '>
                <a className='px-10 text-xl font-semibold max-2xl:text-[16px] max-xl:text-[14px] '>
                    <GiWallet className="text-xl" /> <span className='max-xl:hidden'>Payroll</span>
                </a>
            </li>

            <CashAndBackLink/>


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

