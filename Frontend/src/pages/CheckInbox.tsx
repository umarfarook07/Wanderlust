import React from 'react'
import AuthTemplate from '../containers/AuthContainer'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'
import inboxImage from '../assets/inbox.png'
import CenterHeading from '../components/CenterHeading'
import ConfirmationMessage from '../components/ConfirmationMessage'
const CheckInbox = () => {
    const navigate = useNavigate()
    return (
        <AuthTemplate>
            <div className='w-full h-2/5 text-center flex justify-center'>
                <div className=' w-3/5 h-full bg-creamColor rounded-2xl flex justify-center items-center'>
                    <img className='w-3/4 h-3/4' src={inboxImage} alt="" />
                </div>
            </div>
            <CenterHeading heading='Check your Inbox' />
            <ConfirmationMessage
                message="We have just emailed you the instructions and a reset password link to"
                highlightText="umarfarook456@gmail.com"
            />

            <Button text='Back to Sign in' onClick={() => {
                navigate('/signin')
            }} />
        </AuthTemplate>
    )
}

export default CheckInbox