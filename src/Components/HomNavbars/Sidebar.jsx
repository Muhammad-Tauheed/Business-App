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
import SideLinks from './SideLinks';
const Sidebar = () => {
    const { pathname } = useLocation();
return (
<>
    <aside className=''>
        <nav className='h-screen flex flex-col bg-white border-r shadow-lg'>
            <SideLinks/>

            <div className='border-t flex p-3 '>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxNc5lx8Yi6_zm4jfsxmE7Id5GQOjJY5aopKldIHFEPffj593Svs527Xx2cRgEmjwnWzk&usqp=CAU"
                    className='rounded-full w-10'
                    alt="" />

                <div className={`flex  items-center overflow-hidden transition-all `}>
                    <div className='leading-4'>
                        <h4 className='font-semibold'>Muhammad Tauheed</h4>
                        <span className='text-xs text-gray-600'>tauheed@gmail.com</span>
                    </div>
                    <BsThreeDotsVertical className='text-xl ml-2' />
                </div>

            </div>

        </nav>
    </aside>
</>
)
}

export default Sidebar

