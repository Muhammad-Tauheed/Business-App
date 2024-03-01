import React, { useState } from 'react'
import TopBar from '../HomNavbars/TopBar';
import Sidebar from '../HomNavbars/Sidebar';
import { Link } from 'react-router-dom';
import AllUnreconciled from './AllUnreconciled';
import NewTransaction from './NewTransaction';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { ImAttachment, ImCross } from "react-icons/im";
import { FaRegTrashCan } from 'react-icons/fa6';
import AccountVarifyDetail from './AccountVarifyDetail';
import BankTransaction from './BankTransaction';

const CashandBank = () => {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(1);
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [drawerContent, setDrawerContent] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationIndex, setConfirmationIndex] = useState(null);
    const [isPostAndShowNextClicked, setIsPostAndShowNextClicked] = useState(false); // Add state

    const openDrawer = (content, index) => {
        setDrawerContent(content);
        setDrawerOpen(true);
        setShowConfirmation(true);
        setConfirmationIndex(index);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
        setDrawerContent(null);
        setShowConfirmation(false);
        setConfirmationIndex(null);
    };

    const handlePostShowNext = () => {
        closeDrawer();
        handleTabClick(1);
        setIsPostAndShowNextClicked(true); // Set state when the button is clicked
    };

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const handleConfirmClick = (index, confirmed) => {
        setShowConfirmation(confirmed);
        setConfirmationIndex(index);
    };
    return (
        <>
            <div className='h-full bg-white' >
                <div className='fixed w-screen z-50'>
                    <TopBar />
                </div>

                <div className='flex'>
                    <div className='max-2xl:w-1/5 max-xl:w-1/12 bg-black fixed h-full mt-[50px] overflow-hidden'>
                        <Sidebar />
                    </div>

                    <div className='w-full px-8 max-2xl:ml-[250px] max-xl:ml-[100px] mt-[50px] overflow-x-hidden'>
                        <h1 className='text-3xl ml-5 mt-5'>Cash and Bank</h1>
                        <div className={`drawer ${isDrawerOpen ? 'drawer-open' : ''}`}>
                            <input
                                id="my-drawer"
                                type="checkbox"
                                className="drawer-toggle"
                                checked={isDrawerOpen}
                                onChange={closeDrawer}
                            />
                            <div className="drawer-content">{drawerContent}</div>
                            <div className="drawer-side">
                                <div className='menu p-4 max-2xl:w-[1050px] min-h-full bg-base-200 text-base-content'>
                                    <div className='flex flex-col gap-2'>

                                        <div className='flex w-100  items-center justify-between'>
                                            <span className='text-lg'>Match the bank transaction</span>
                                            <div className='flex items-center gap-3'>
                                                <BsFillQuestionCircleFill className='text-blue-500 text-xl' />
                                                <ImCross />
                                            </div>
                                        </div>

                                        <div className='flex flex-col bg-white w-full border px-2 py-4'>

                                            <div className='border flex flex-col w-full items-start px-2 py-3'>
                                                <span className='text-lg'>Transaction from the bank statement</span>
                                                <div className='divider'></div>
                                                <div className='flex items-center w-full justify-between'>
                                                    <span>2024-2-24 </span>
                                                    <div className='flex flex-col'>
                                                        <span>234,345</span>
                                                        <span>DKK 1034,345</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='flex w-full  items-center justify-between mt-10'>
                                                <span className='text-lg'>Match the bank transaction</span>
                                            </div>

                                            <div className='border flex flex-col w-full items-start px-2  mt-3'>
                                                <div className='border-b flex w-full py-2'>
                                                    <div className='flex w-full  items-center'>
                                                        <div className='w-1/3 flex items-center justify-start'>Match the bank transaction</div>
                                                        <div className='w-1/3 flex items-center justify-center'>125,23</div>
                                                        <div className='w-1/3 flex items-center justify-end'><FaRegTrashCan /></div>
                                                    </div>
                                                </div>

                                                <div className='w-full flex'>
                                                    <div className='w-1/2 pr-2 flex flex-col gap-2'>

                                                        <div className='flex items-center justify-between'>
                                                            <label className='' htmlFor="gender">Transaction relate.. </label>
                                                            <select className='border input-sm w-full max-w-xs'>
                                                                <option value=""></option>
                                                                <option value="male">PRK</option>
                                                                <option value="female">ADE</option>
                                                                <option value="nonbinary">US $</option>
                                                                {/* Add more gender options as needed */}
                                                            </select>
                                                        </div>

                                                        <div className='flex items-center justify-between'>
                                                            <span>Accounting templa...</span>
                                                            <input type="text" placeholder="Type here" className="border input-sm w-full max-w-xs" />
                                                        </div>

                                                        <div className='flex items-center justify-between'>
                                                            <span>Description</span>
                                                            <input type="text" placeholder="Type here" className="border input-sm w-full max-w-xs" />
                                                        </div>
                                                    </div>

                                                    <div className='w-1/2 flex flex-col gap-2'>

                                                        <div className='flex items-center justify-between'>
                                                            <span>Deposited ammount</span>
                                                            <input type="text" placeholder="Type here" className="border input-sm w-full max-w-xs" />
                                                        </div>

                                                        <div className='flex items-center justify-between w-full'>
                                                            <span className='flex items-center gap-2'><input type="checkbox" defaultChecked className="checkbox" />
                                                                Ammounts incl. VAT</span>
                                                            <span></span>
                                                        </div>

                                                        <div className='flex items-center justify-between mt-2'>
                                                            <span>Journal series</span>
                                                            <input type="text" placeholder="Type here" className="border input-sm w-full max-w-xs" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <AccountVarifyDetail />
                                                <div className='flex items-end w-full'>

                                                    <div className='flex flex-col items-center  py-3 w-full  cursor-pointer text-gray-500 '>
                                                        <div className='flex justify-between w-full'>
                                                            <span>Sum debit:</span>
                                                            <span>0,00</span>
                                                        </div>

                                                        <div className='flex justify-between w-full'>
                                                            <span>Sum credit:</span>
                                                            <span>0,00</span>
                                                        </div>

                                                        <div className='divider'></div>
                                                        <div className='flex justify-between w-full'>
                                                            <span>Total:</span>
                                                            <span>0,00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex w-full items-center justify-end'>
                                                    <div className='flex items-center gap-2'>
                                                        <button onClick={handlePostShowNext} className='btn bg-blue-600 text-white hover:bg-blue-700 w-52'>Post and show next</button>
                                                        <button className='btn bg-red-600 text-white hover:text-black w-52'>Cancle</button>

                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`all ${isDrawerOpen ? 'hidden' : ''}`}>
                            <div className='flex w-100 justify-evenly py-1 mt-9'>
                                <button
                                    onClick={() => handleTabClick(1)}
                                    className={`btn  w-52 ${activeTab === 1 ? "bg-blue-600 hover:bg-blue-800 text-white" : "bg-gray-300 border shadow-lg hover:bg-blue-600 hover:text-white"}`}
                                >
                                    Bank transitions this peri..
                                </button>
                                <button
                                    onClick={() => handleTabClick(2)}
                                    className={`btn w-52 ${activeTab === 2 ? "bg-blue-600 hover:bg-blue-800 text-white" : "bg-gray-300 border shadow-lg hover:bg-blue-600 hover:text-white"}`}
                                >
                                    All unreconciled bank trans...
                                </button>
                                <button
                                    onClick={() => handleTabClick(3)}
                                    className={`btn w-52 ${activeTab === 3 ? "text-white bg-gray-600 hover:bg-gray-400" : "bg-gray-300 border shadow-lg hover:bg-gray-400 hover:text-white"}`}

                                >
                                    New bank transition
                                </button>

                            </div>

                            <div className='divider'></div>

                            {activeTab === 1 && <div><BankTransaction/></div>}
                            {activeTab === 2 && (
                                <div>
                                    {/* Pass down the state and callback function */}
                                    <AllUnreconciled
                                        openDrawer={openDrawer}
                                        onConfirmClick={handleConfirmClick}
                                        showConfirmation={showConfirmation}
                                        confirmationIndex={confirmationIndex}
                                        isPostAndShowNextClicked={isPostAndShowNextClicked} // Pass the new state
                                    />
                                </div>
                            )}
                            {activeTab === 3 && <div><NewTransaction /></div>}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CashandBank