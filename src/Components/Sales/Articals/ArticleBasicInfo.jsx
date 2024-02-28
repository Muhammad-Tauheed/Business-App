import React from 'react'

const ArticleBasicInfo = () => {
    return (
        <>
            <div className='border-b w-100'>
                <h1 className='text-xl'>Basic information</h1>
            </div>

            <div className='flex justify-between items-center'>
                <span className='flex items-center gap-2'><input type="checkbox" defaultChecked className="checkbox" />Active</span>
            </div>

            <div className='flex justify-between items-center'>
                <span>Artical no.</span>
                <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
            </div>

            <div className='flex justify-between items-center'>
                <span>Artical name</span>
                <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
            </div>

            <div className='flex justify-between items-center'>
                <span>Artical name in English</span>
                <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
            </div>

            <div className='flex justify-between items-center'>
                <span>Barcode</span>
                <input type="text" placeholder="" className=" border input-sm w-full max-w-xs " />
            </div>

            <div className='flex justify-between items-start'>
                <span>Notes</span>
                <textarea className="textarea w-[320px] textarea-bordered" placeholder=""></textarea>
            </div>
        </>
    )
}

export default ArticleBasicInfo