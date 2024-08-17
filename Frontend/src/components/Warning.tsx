import React from 'react'
import { memo } from 'react'

const Warning = memo(() => {
    return (
        <div className='mt-14 py-4 rounded-lg  text-center bg-warningBgColor'>
            <h2>Check the latest COVID-19 restrictions before you travel. <span className='text-red-500 cursor-pointer'>Learn more</span></h2>
        </div>
    )
});

export default Warning