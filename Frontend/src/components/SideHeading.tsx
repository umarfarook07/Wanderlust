import { IHeading } from './CenterHeading'
import { memo } from 'react'
export const MainHeading = memo(({ heading }: IHeading) => {
    return (
        <div className='w-full flex justify-start'>
            <h1 className='font-semibold text-2xl py-2 text-darkGray'>{heading}</h1>
        </div>
    )
});
export const SubHeading = memo(({ heading }: IHeading) => {
    return (
        <div className='w-full flex justify-start'>
            <h3 className='text-darkGray w-1/2 mb-2'>{heading}</h3>
        </div>
    )
});
