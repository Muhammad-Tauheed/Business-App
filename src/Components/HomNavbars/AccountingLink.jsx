import React from 'react'
import { MdAccountBalance } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom';

const AccountingLink = () => {
    const { pathname } = useLocation();
    const open = pathname === "/journalentries" || pathname === "/newjournal";
    return (
        <>
            <li className='w-full'>
                <details open={open} className='flex justify-between w-full'>
                    <summary className={`px-10 text-xl font-semibold max-2xl:text-[16px] max-xl:text-[17px]  ${pathname === "/journalentries" || pathname === "/newjournal" ? "bg-zinc-700  hover:bg-zinc-800   font-semibold rounded-lg text-white " : ""}`}>
                        <MdAccountBalance className="text-xl" /> <span className='max-xl:hidden'>Accounting</span>
                    </summary>
                    <ul className="p-2 bg-base-100 h-52 rounded-t-none z-20 w-full overflow-y-auto">

                        <Link to={"/journalentries"}>
                            <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "/journalentries" || pathname === "/newjournal"  ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                <a>Journal entries</a>
                            </li>
                        </Link>
                        <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a>Account analysis </a>
                        </li>

                        <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a>VAT report </a>
                        </li>

                        <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a>EU periodic VAT </a>
                        </li>

                        <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a>End-of-year check </a>
                        </li>

                        <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a>Fixed assets </a>
                        </li>

                        <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a>Cost centers </a>
                        </li>
                    </ul>
                </details>
            </li>
        </>
    )
}

export default AccountingLink