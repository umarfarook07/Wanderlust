import React, { memo } from 'react'

export interface IHeading {
    heading:string
}
const CenterHeading = memo(({ heading }: IHeading) => {
    return (
        <div className='w-full flex justify-center'>
            <h1 className='font-semibold text-3xl py-4 text-darkGray'>{heading}</h1>
        </div>
    )
});
export default CenterHeading