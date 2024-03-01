import React from 'react'
import { FaCodeBranch, FaPlusSquare, FaRegMap } from 'react-icons/fa';
import { MdGroups, MdOutlineSettingsInputComponent, MdOutlineWifiProtectedSetup } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { RiGitBranchFill } from "react-icons/ri";
import { TbLayoutDistributeVertical, TbWorld } from "react-icons/tb";
import { FaBusSimple, FaLocationDot } from 'react-icons/fa6';
import { PiRoadHorizonFill } from "react-icons/pi";
import { CiCircleList } from "react-icons/ci";
import { BiSolidCategoryAlt } from "react-icons/bi";

const CompanySetup = () => {
    const { pathname } = useLocation();
    const open = pathname === "/countries" || pathname === "/groups"|| pathname === "/vehicles";
    return (
        <>
            <li className={`w-full`}>
                <details open={open} className={`flex justify-evenly w-full `}>
                    <summary className={`px-10 text-xl font-semibold max-2xl:text-[16px] max-xl:text-[17px]  ${pathname === "/countries" || pathname === "/groups" || pathname === "/vehicles" || pathname === "" || pathname === "" || pathname === "" || pathname === "" ? "bg-zinc-700  hover:bg-zinc-800   font-semibold rounded-lg text-white " : ""}`}>
                        <MdOutlineWifiProtectedSetup className="text-xl" /> <span className='max-xl:hidden'>Company Setup</span>
                    </summary>

                    <ul className="bg-base-100 rounded-t-none z-20 w-full overflow-y-scroll h-40">

                        <li>
                            <details className=''>
                                <summary className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "/countries" || pathname === "/groups" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                    <FaCodeBranch /> Classifications
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <FaPlusSquare /> Departments</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <RiGitBranchFill /> Classes</a>
                                    </li>

                                    <Link to={"/countries"}>
                                        <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "/countries" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                            <a> <TbWorld /> Countries</a>
                                        </li>
                                    </Link>

                                    <Link to={"/groups"}>
                                        <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "/groups" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                            <a> <MdGroups /> Entity groups</a>
                                        </li>
                                    </Link>

                                </ul>
                            </details>
                        </li>

                        <li>
                            <details className=''>
                                <summary className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "/vehicles" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                    <TbLayoutDistributeVertical /> Distribution setup
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <Link to={"/vehicles"}>
                                        <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                            <a> <FaBusSimple /> Vehicles</a>
                                        </li>
                                    </Link>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <PiRoadHorizonFill /> Routes</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <FaRegMap /> Customer map view</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <FaLocationDot /> Employee location routes</a>
                                    </li>
                                </ul>
                            </details>
                        </li>



                        <li>
                            <details className=''>
                                <summary className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                    <MdOutlineSettingsInputComponent /> LOVs setup
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <CiCircleList /> User list of values</a>
                                    </li>
                                    <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                        <a> <BiSolidCategoryAlt /> Cost category</a>
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

export default CompanySetup