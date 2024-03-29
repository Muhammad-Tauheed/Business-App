import React from 'react'
import { FaMoneyBillAlt, FaUserPlus } from 'react-icons/fa'
import { MdOutlinePointOfSale, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { RiPassValidLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom'

const SalesLink = () => {

    const { pathname } = useLocation();
    const open1 = pathname === "/saleInvoice" || pathname === "/saleInvoice/1" || pathname === "/customers" || pathname === "/customers/1" || pathname === "/article" || pathname === "/editcustomer" || pathname === "/newarticles" || pathname === "/gatepass";

    return (
        <>
            <li className={`w-full`}>
                <details open={open1} className={`flex justify-evenly w-full `}>
                    <summary className={`px-10 text-xl font-semibold max-2xl:text-[16px] max-xl:text-[17px]  ${pathname === "/saleInvoice" || pathname === "/saleInvoice/1" || pathname === "/customers" || pathname === "/customers/1" || pathname === "/article" || pathname === "/editcustomer" || pathname === "/newarticles" || pathname === "/gatepass" ? "bg-zinc-700  hover:bg-zinc-800   font-semibold rounded-lg text-white " : ""}`}>
                        <FaMoneyBillAlt className="text-xl" /> <span className='max-xl:hidden'>Sales</span>
                    </summary>

                    <ul className="p-2 bg-base-100 rounded-t-none z-20 w-full ">
                        <Link to={"/saleInvoice"}>
                            <li className={`hover:bg-gray-300 font-semibold text-black ${pathname === "/saleInvoice" || pathname === "/saleInvoice/1" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                <a ><MdOutlinePointOfSale /> Sale invoice </a>
                            </li>
                        </Link>

                        <Link to={"/customers"}>
                            <li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "/customers" || pathname === "/customers/1" || pathname === "/editcustomer" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                                <a><FaUserPlus /> Customer </a>
                            </li>
                        </Link>
                        <Link to={"/article"}><li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "/article" || pathname === "/newarticles" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a><MdOutlineProductionQuantityLimits /> Articals </a>
                        </li></Link>
                        <Link to={"/gatepass"}><li className={`hover:bg-gray-300 font-semibold text-black mt-2 ${pathname === "/gatepass" || pathname === "" ? "bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold" : ""}`}>
                            <a><RiPassValidLine /> Gate pass management</a>
                        </li></Link>
                    </ul>
                </details>
            </li>
        </>
    )
}

export default SalesLink