import React from 'react'
import { MdLiveHelp } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";
import { FaFileCircleCheck } from 'react-icons/fa6';
import { AiOutlineMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="flex items-center bg-indigo-800 pr-4 h-[50px] overflow-hidden">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl  text-white">E Networks eEkonomi Pro </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1  text-white">
      <li><button className='btn btn-ghost border-white border'>Guide mig</button></li>
      <li><button className='btn bg-indigo-800 border-indigo-800 text-white hover:bg-900 rounded-full'>+ Add</button></li>
      <li><button className='btn bg-indigo-800 border-indigo-800 text-white hover:bg-900 rounded-full'><MdLiveHelp /> Help</button></li>
      <li><button><FaFileUpload className='text-3xl' /></button></li>
      <li><button><FaFileCircleCheck className='text-3xl' /></button></li>
      <li><button><AiOutlineMessage className='text-3xl' /></button></li>
      <li><button><FaBell className='text-3xl' /></button></li>
      <li><button><FaQuestionCircle  className='text-3xl' /></button></li>
      
    </ul>
  </div>
</div>
  )
}

export default TopBar