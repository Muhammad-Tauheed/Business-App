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

const SideLinks = () => {
    const { pathname } = useLocation();
    return (
        <ul className={`flex-1  menu menu-horizontal overflow-hidden transition-all text-gray-500`} >

            <Link to="/home" className='w-full'>
                <li className={`flex justify-between w-full ${pathname === "/home" ? "bg-indigo-800 text-white rounded-lg" : ""}`}>
                    <a className='px-10  text-xl font-semibold'>
                        <FaHome className="text-3xl" /> Start Page
                    </a>
                </li>
            </Link>

            <li className={`w-full`}>
                <details className={`flex justify-evenly w-full `}>
                    <summary className='px-10 text-xl font-semibold'>
                        <FaMoneyBillAlt className="text-3xl" />  Sales
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none z-20 w-full ">
                        <Link to={"/saleInvoice"}>
                            <li className={`hover:bg-indigo-800 rounded-lg font-semibold hover:text-white ${pathname === "/saleInvoice" || pathname === "/saleInvoice/1" ? "bg-indigo-800 font-semibold text-white" : ""}`}>
                                <a>Sale invoice </a>
                            </li>
                        </Link>

                        <Link to={"/customers"}>
                            <li className={`hover:bg-indigo-800 rounded-lg font-semibold hover:text-white ${pathname === "/customers" || pathname === "/customers/1" ? "bg-indigo-800 font-semibold rounded-lg text-white" : ""}`}>
                                <a>Customer </a>
                            </li>
                        </Link>
                        <Link to={"/articals"}><li className={`hover:bg-indigo-800 font-semibold hover:text-white ${pathname === "/articals"?  "bg-indigo-800 font-semibold rounded-lg text-white" : ""}`}>
                            <a>Articals </a>
                        </li></Link>
                    </ul>
                </details>
            </li>

            <li className='w-full'>
                <details className='flex justify-between w-full'>
                    <summary className='px-10 text-xl font-semibold'>
                        <FaBoxOpen className="text-3xl" />  Purchasing
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none z-20 w-full">
                        <Link to={"/purchases"}><li className={`hover:bg-indigo-800 font-semibold hover:text-white ${pathname === "/purchases" || pathname === "/purchases/1" ? "bg-indigo-800  font-semibold rounded-lg text-white" : ""}`}>
                            <a>Purchase invoice</a>
                        </li></Link>
                        <Link to={"/suppliers"}>
                            <li className={`hover:bg-indigo-800 font-semibold hover:text-white ${pathname === "/suppliers" || pathname === "/suppliers/1" ? "bg-indigo-800  font-semibold rounded-lg text-white" : ""}`}>
                                <a>Suppliers</a>
                            </li>
                        </Link>
                        <li className='hover:bg-indigo-800 font-semibold hover:text-white'>
                            <a>Source documents</a>
                        </li>
                    </ul>
                </details>
            </li>

            <li className='flex justify-between w-full'>
                <a className='px-10 text-xl font-semibold'>
                    <GiWallet className="text-3xl" /> Payroll
                </a>
            </li>

            <li className='flex justify-between w-full'>
                <a className='px-10 text-xl font-semibold'>
                    <FaMoneyBillTransfer className="text-3xl" /> Cash & bank
                </a>
            </li>

            <li className='w-full'>
                <details className='flex justify-between w-full'>
                    <summary className='px-10 text-xl font-semibold'>
                        <MdAccountBalance className="text-3xl" />  Accounting
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

            <li className='w-full'>
                <details className='flex justify-between w-full'>
                    <summary className='px-10 text-xl font-semibold'>
                        <IoMdSettings className="text-3xl" /> Settings
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
                <a className='px-10 text-xl font-semibold'>
                    <SlWallet className="text-3xl" /> Financing
                </a>
            </li>

            <li className='flex justify-between w-full'>
                <a className='px-10 text-xl font-semibold'>
                    <IoIosApps className="text-3xl" /> Apps
                </a>
            </li>



        </ul>
    )
}

export default SideLinks