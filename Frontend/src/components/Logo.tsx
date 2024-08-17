import { memo } from 'react';
import { useNavigate } from 'react-router-dom'

const Logo = memo(() => {
  const Navigate = useNavigate();
  return (
    <h1 className='font-bold text-4xl text-skyBlue cursor-pointer' onClick={() => {
      Navigate('/')
    }}>Nature Tour</h1>
  )
});

export default Logo