import React from 'react'
import { FaBoxOpen } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'

const PurchasingLink = () => {
    const { pathname } = useLocation();

    const open2 = pathname === "/purchases" || pathname === "/purchases/1" || pathname === "/suppliers" || pathname === "/suppliers/1";
  return (
    <>
    <li className='w-full'>
                <details open={open2} className='flex justify-between w-full'>
                    <summary className={`px-10 text-xl font-semibold max-2xl:text-xl max-xl:text-[17px]  ${pathname === "/purchases" || pathname === "/purchases/1" || pathname === "/suppliers" || pathname === "/suppliers/1" ? "bg-zinc-700  hover:bg-zinc-800   font-semibold rounded-lg text-white " : ""}`}>
                        <FaBoxOpen className="text-3xl" /> <span className='max-xl:hidden'>Purchasing</span>
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none z-20 w-full">
                        <Link to={"/purchases"}><li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "/purchases" || pathname === "/purchases/1" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a>Purchase invoice</a>
                        </li></Link>
                        <Link to={"/suppliers"}>
                            <li className={`hover:bg-gray-300 font-semibold text-black mt-2  ${pathname === "/suppliers" || pathname === "/suppliers/1" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                <a>Suppliers</a>
                            </li>
                        </Link>
                        <li className='hover:bg-gray-300 font-semibold text-black mt-2'>
                            <a>Source documents</a>
                        </li>
                    </ul>
                </details>
            </li>
    </>
  )
}

export default PurchasingLink