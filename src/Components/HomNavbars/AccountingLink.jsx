import React from 'react'
import { BiSolidReport } from 'react-icons/bi';
import { BsJournalBookmarkFill } from 'react-icons/bs';
import { MdAccountBalance, MdGpsFixed, MdOutlineAccountTree } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaCalendarAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const AccountingLink = () => {
    const { pathname } = useLocation();
    const open = pathname === "/journalentries" || pathname === "/newjournal";
    return (
        <>
            <li className='w-full'>
                <details open={open} className='flex justify-between w-full'>
                    <summary className={`px-10 text-xl font-semibold max-2xl:text-[16px] max-xl:text-[17px]  ${pathname === "/journalentries" || pathname === "/newjournal" || pathname === "/analysis" ? "bg-zinc-700  hover:bg-zinc-800   font-semibold rounded-lg text-white " : ""}`}>
                        <MdAccountBalance className="text-xl" /> <span className='max-xl:hidden'>Accounting</span>
                    </summary>
                    <ul className="p-2 bg-base-100 h-52 rounded-t-none z-20 w-full overflow-y-auto">

                        <Link to={"/journalentries"}>
                            <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "/journalentries" || pathname === "/newjournal" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                <a><BsJournalBookmarkFill /> Journal entries</a>
                            </li>
                        </Link>
                        <Link to={"/analysis"}><li  className={`hover:bg-gray-300 font-semibold text-black ${pathname === "/analysis" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a><MdOutlineAccountTree /> Account analysis </a>
                        </li></Link>

                        <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a><BiSolidReport /> VAT report </a>
                        </li>

                        <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a><HiOutlineDocumentReport /> EU periodic VAT </a>
                        </li>

                        <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a><FaCalendarAlt /> End-of-year check </a>
                        </li>

                        <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a><MdGpsFixed /> Fixed assets </a>
                        </li>

                        <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a><FaLocationDot /> Cost centers </a>
                        </li>
                    </ul>
                </details>
            </li>
        </>
    )
}

export default AccountingLink