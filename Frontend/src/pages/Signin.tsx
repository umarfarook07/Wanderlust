import AuthTemplate from '../components/AuthTemplate'
import HeaderComponent from '../components/CenterHeading'
import Input from '../components/Input'
import ForgetPassword from '../components/ForgetPassword'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import DividerWithText from '../components/DividerWithText'
import { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import { memo } from 'react'
import SocialAuthButtons from '../components/SocialAuthButtons'
import { useNavigate } from 'react-router-dom'
// TODO:add handleSignin function
// it has to render to home after the completion of signin
// after clicking register it has to render to register page
// on clicking forgot password,take the user to forget password page
const Signin = memo(() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSignin = async () => {
        navigate('/')
    }

    return (
        <AuthTemplate>
            <div>
                <HeaderComponent heading={'SIGN IN'} />
                <Input id={'email'} placeholder={'Enter email address'} label={'Email Address'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                }} type={'email'} />
                <Input id={'password'} placeholder={'Enter Password'} label={'Password'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value)
                }} type={'password'} />
                <ForgetPassword />
                <Button text={'Continue with Email'} onClick={() => {
                    handleSignin()
                }} />
                <DividerWithText />
                <SocialAuthButtons />
                <BottomWarning label={'Don’t have an account?'} to={'/signup'} buttonText={'Register'} />
            </div>
        </AuthTemplate>
    )
});

export default Signin