import React, { memo } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ForgetPassword = memo(() => {
  const navigate = useNavigate();
  return (
      <div className='w-full text-end'>
      <button onClick={() => {
        navigate('/forgotPassword')
          }} className='text-sm font-medium text-skyBlue'>Forgot password?</button>
      </div>
  )
})

export default ForgetPassword