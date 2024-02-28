import React from 'react'
import { MdAccountBalance } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom';

const AccountingLink = () => {
    const { pathname } = useLocation();
    return (
        <>
            <li className='w-full'>
                <details className='flex justify-between w-full'>
                    <summary className={`px-10 text-xl font-semibold max-2xl:text-xl max-xl:text-[17px]  ${pathname === "/journalentries" ? "bg-zinc-700  hover:bg-zinc-800   font-semibold rounded-lg text-white " : ""}`}>
                        <MdAccountBalance className="text-3xl" /> <span className='max-xl:hidden'>Accounting</span>
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none z-20 w-full">

                        <Link to={"/journalentries"}>
                            <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "/journalentries" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                <a>Journal entries</a>
                            </li>
                        </Link>
                        <li className={`hover:bg-indigo-800 font-semibold hover:text-white ${pathname === "/journalentries" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a>Link 2</a>
                        </li>
                    </ul>
                </details>
            </li>
        </>
    )
}

export default AccountingLink