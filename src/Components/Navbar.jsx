import React from 'react'
import { MdAddCall } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
    <div className="navbar bg-zinc-800 px-1 fixed">
  <div className="flex-1 ml-40">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3ms3_wxs91iPsi4aHWEFqG8fsbMxR7upaA&usqp=CAU" className='h-16' alt="" />
  </div>
  <div className="flex-none mr-40">
    <ul className="menu menu-horizontal px-1 text-white gap-5 flex items-center">
        <div className='flex gap-1 font-bold'>
          <MdAddCall className='text-white text-lg mt-1 ' />
           +92 45684568
        </div>
      
     <Link to="/signup"><li><button className='btn btn-ghost border-primary-content px-10 py-1 font-bold'>Signup</button></li></Link>
     <Link to="/login"><li><button className='btn btn-zinc-200 border-primary-content px-16 py-1 font-bold'>Login</button></li></Link> 
      <li className=''>
      <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
      </li>
    </ul>
  </div>
</div>
<div className='w-full  flex items-center justify-center fixed mt-[95px]'>
    <div className="flex-none">
    <ul className="menu menu-horizontal items-center gap-10 text-white ubuntu-bold ">
      <li className=''>
        <details className='dropdown'>
          <summary className='w-full' >
          Who we are
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none text-black w-[300px] flex flex-col items-start ">
            <li><Link>About  us</Link></li>
            <li><a>Become a visma company</a></li>
            <li><a>Technology at Visma</a></li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>
          What we offer
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none text-black w-[300px] flex flex-col items-start">
            <li><a>Could software</a></li>
            <li><a>For enterprises</a></li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>
          For invertors
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none text-black w-[300px] flex flex-col items-start">
            <li><a>For investors</a></li>
            <li><a>Financials</a></li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>
          Careers
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none text-black w-[300px] flex flex-col items-start">
            <li><a>Careers at Visma</a></li>
            <li><a>Locations
</a></li>
          </ul>
        </details>
      </li>

      <li><a>Newn</a></li>

    </ul>
  </div>

</div>
    </>
  )
}

export default Navbar