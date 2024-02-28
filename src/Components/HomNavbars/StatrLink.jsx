import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const StatrLink = () => {
    const { pathname } = useLocation();
    return (
        <>
            <Link to="/home" className='w-full'>
                <li className={`flex justify-between w-full bg-white rounded-lg text-black  ${pathname === "/home" ? "bg-white hover:bg-gray-400 text-black rounded-lg" : ""}`}>
                    <a className='px-10  max-2xl:text-xl max-xl:text-[17px]  font-semibold'>
                        <FaHome className="text-3xl" /> <span span className='max-xl:hidden'> Start Page</span>
                    </a>
                </li>
            </Link>
        </>
    )
}

export default StatrLink
