import React from 'react';
import { memo } from 'react';
interface IError {
    error: string | null; // Adjust type based on your use case
}

const ErrorMessage = memo(({ error }: IError) => {
    return (
        <>
            {error && <span className='text-red-500 text-sm'>{error}</span>}
        </>
    );
});

export default ErrorMessage;
