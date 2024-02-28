import React from 'react'
import { MdLiveHelp } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";
import { FaFileCircleCheck } from 'react-icons/fa6';
import { AiOutlineMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="flex items-center bg-white pr-4 h-[50px] overflow-hidden shadow-lg">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl  text-black">E Networks ERP </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal gap-2 px-1 text-black">
      <li ><button className=' btn-ghost border-black border'>Guide mig</button></li>
      <li ><button className=' bg-gray-100 border-black text-black hover:bg-900 rounded-full'>+ Add</button></li>
      <li ><button className=' bg-gray-100 border-black text-black hover:bg-900 rounded-full'><MdLiveHelp /> Help</button></li>
      <li><button><FaFileUpload className='text-xl' /></button></li>
      <li><button><FaFileCircleCheck className='text-xl' /></button></li>
      <li><button><AiOutlineMessage className='text-xl' /></button></li>
      <li><button><FaBell className='text-xl' /></button></li>
      <li><button><FaQuestionCircle  className='text-xl' /></button></li>
      
    </ul>
  </div>
</div>
  )
}

export default TopBar