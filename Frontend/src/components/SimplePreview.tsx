import React from 'react'
interface ISimplePreview {
    imageSrc: string;
    name: string;
    properties: number;
    alt?: string;
}
import { memo } from 'react'

const SimplePreview = memo(({ imageSrc, name, properties, alt }: ISimplePreview) => {
    return (
        <div>
            <div className='py-1 px-2 rounded '>
                <img className='w-full h-52 mb-2' src={imageSrc} alt={alt ? alt : 'Loading..'} />
                <p className='text-2xl font-semibold'>{name}</p>
                <p>{properties} Properties</p>
            </div>
        </div>
    )
});

export default SimplePreview