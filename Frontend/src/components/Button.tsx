import React, { memo } from 'react';

interface IButton {
    type?: 'button' | 'submit' | 'reset'; 
    text: string;
    loading?: {
        state: boolean;
        message: string;
    };
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = memo(({ type = 'button', text, loading = { state: false, message: '' }, onClick }: IButton) => {
    return (
        <div className='my-4'>
            <button
                type={type} 
                className='bg-skyBlue w-full py-2 px-2 text-md rounded-md text-white hover:bg-skyBlueDark transition-colors'
                onClick={onClick}
                disabled={loading.state}
            >
                {loading.state ? loading.message : text}
            </button>
        </div>
    );
});
