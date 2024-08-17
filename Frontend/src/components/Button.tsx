import React, { memo } from 'react'
interface IButton {
    text: string;
    onClick: React.MouseEventHandler;
}
export const Button = memo(({ text, onClick }: IButton) => {
    return (
        <div className='my-4'>
            <button className='bg-skyBlue w-full py-2 px-2 text-md rounded-md text-white' onClick={onClick}>
                {text}
            </button>   
        </div>
    )
});
