import { memo } from 'react';
import Input from './Input'
import { Button } from './Button'

const SearchBox = memo(() => {
    return (
        <div className='flex gap-8 bg-white px-8 py-1 rounded-lg items-end justify-between'>
            <Input type={'text'} placeholder={'Where are You Going?'} id={'location'} label={'Location'} />
            <Input type={'date'} label={'Check in date'} id={'in-date'} />
            <Input type={'date'} label={'Check out date'} id={'out-date'} />
            <Input type={'number'} placeholder={'Guests'} id={'guests'} label={'Number Of Guests'} />
            <Button text={'Search'} onClick={() => {
                alert('hello')
            }} />
        </div>
    )
});

export default SearchBox