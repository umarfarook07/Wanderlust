import React, { EventHandler, memo } from 'react'
interface InputType {
    id?: string;
    label?: string;
    type: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler;
}
const Input = memo(({ id, label, type, placeholder, onChange }: InputType) => {
    return (
        <div className='grid grid-flow-row my-2 box-border'>
            { label ? <label className='grid-rows-1 h-[20px] text-base mb-2 font-medium' htmlFor={id}>{label}</label> : '' }
            <input
                className='grid-rows-1 box-content bg-lightGray h-[44px] outline-none px-3 pl-2 rounded-[4px] text-lg focus:shadow focus:shadow-skyBlue'
                required
                id={id}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />

        </div>
    )
});



export default Input