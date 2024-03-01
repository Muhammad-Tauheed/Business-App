import React from 'react'
import { BsBuildings } from 'react-icons/bs';
import { CiCreditCard1 } from 'react-icons/ci';
import { FaBox, FaBoxes, FaBusinessTime, FaPlusSquare } from 'react-icons/fa';
import { GiFactory, GiSandsOfTime } from 'react-icons/gi';
import { IoMdListBox } from 'react-icons/io';
import { IoSettingsSharp, IoTimerSharp } from "react-icons/io5";
import { MdFactory, MdGroups, MdMoreTime, MdOutlineFactory, MdOutlineTimerOff, MdPendingActions } from 'react-icons/md';
import { SlChemistry } from 'react-icons/sl';
import { useLocation } from 'react-router-dom';
import { SiAzureartifacts } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

const ManufacturingLink = () => {
    const { pathname } = useLocation();
    const open = pathname === "";
    return (
        <>
            <li className={`w-full`}>
                <details open={open} className={`flex justify-evenly w-full `}>
                    <summary className={`px-10 text-xl font-semibold max-2xl:text-[16px] max-xl:text-[17px]  ${pathname === "" || pathname === "" || pathname === "" || pathname === "" || pathname === "" || pathname === "" || pathname === "" ? "bg-zinc-700  hover:bg-zinc-800   font-semibold rounded-lg text-white " : ""}`}>
                        <GiFactory className="text-xl" /> <span className='max-xl:hidden'>Manufacturing</span>
                    </summary>

                    <ul className="bg-base-100 rounded-t-none z-20 w-full overflow-y-scroll h-40">

                        <li>
                            <details className=''>
                                <summary className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                <SiAzureartifacts /> Manufacturing setup
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <FaBox /> routing</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <IoSettingsSharp /> cost templat</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <MdGroups /> Work center</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <FaBoxes /> Bill of materials</a>
                                    </li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details className=''>
                                <summary className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                <FaBusinessTime /> Discrete manufacturing
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <IoTimerSharp /> Order of production</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <MdOutlineTimerOff /> Discrete work order</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <BsBuildings /> Pending work order</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <GiSandsOfTime /> Assembly build</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <MdMoreTime /> Assembly unuild</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <CiCreditCard1 /> Employee peace rate</a>
                                    </li>
                                </ul>
                            </details>
                        </li>

                        <li>
                            <details className=''>
                                <summary className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                <VscServerProcess /> Process manufacturing
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <IoTimerSharp /> Order of production</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <IoMdListBox /> Work order</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <MdOutlineFactory /> Pending work progress</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <MdFactory /> Work progress</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <MdPendingActions /> Pending material consumption</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <SlChemistry /> material consumption</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </details>
            </li>


        </>
    )
}

export default ManufacturingLink