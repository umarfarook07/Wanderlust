import React from 'react'
import AuthTemplate from '../components/AuthTemplate'
import CenterHeading from '../components/CenterHeading'
import CentreSubHeading from '../components/CentreSubHeading'
import Input from '../components/Input'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import { useNavigate } from 'react-router-dom'
const ForgotPassword = () => {
    const navigate = useNavigate();
    return (
        <AuthTemplate>
            <CenterHeading heading={'Forgot Password'} />
            <CentreSubHeading heading={'We’ll send you a link to reset it. Enter your email address used for My Dream Place'} />
            <Input type={'text'} label='Your email Address' />
            <Button text='Send Reset Link' onClick={() => {
                navigate('/checkInbox')
            }} />
            <BottomWarning label='By creating an account, you agree with our ' buttonText='Terms and Conditions and Privacy Statement.' to='/terms'/>
        </AuthTemplate>
    )
}

export default ForgotPassword