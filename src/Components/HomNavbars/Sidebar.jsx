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
    <aside className='overflo-y-scroll'>
        <nav className='h-screen flex flex-col items-center bg-zinc-800 border-r shadow-lg '>
            <SideLinks/>

        </nav>
    </aside>
</>
)
}

export default Sidebar

