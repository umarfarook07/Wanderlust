import { ReactNode } from 'react';
import AuthTemplate from '../components/AuthTemplate';
import HeaderComponent from "../components/CenterHeading";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import DividerWithText from "../components/DividerWithText";
import SocialAuthButtons from "../components/SocialAuthButtons";
import CentreSubHeading from "../components/CentreSubHeading";
import React, { Children, useState } from "react";
import { memo } from "react";
import axios, { AxiosResponse } from "axios";

// TODO: use useContext
const Register = memo(() => {
    const [isEmailStep, setIsEmailStep] = useState(true)
    interface IData {
        username: string;
        password: string;
    }
    return (
        <AuthTemplate>
            {isEmailStep ? <EmailStep /> : <PasswordStep />}
        </AuthTemplate>
    )
});

const EmailStep = memo(() => {
    return (
        <>
            <HeaderComponent heading={'Register'} />
            <Input id={'email'} placeholder={'Enter email address'} label={'Email Address'} onChange={() => {

            }} type={'email'} />

            <Button text={'Continue with Email'} onClick={() => {

            }} />
            <DividerWithText />
            <SocialAuthButtons />
            <BottomWarning label={'Already have an account?'} to={'/signin'} buttonText={'Sign in'} />
        </>
    )
})
const PasswordStep = memo(() => {
    const [password, setPassword] = useState('');
    return (
        <>
            <HeaderComponent heading={'Create Password'} />
            <CentreSubHeading heading={'Use a minimum of 10 characters, including letters, lowercase letters, and numbers.'} />
            <Input id={'password'} placeholder={'Enter Password'} label={'Password'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value)
            }} type={'password'} />
            <Input id={'ConfirmPassword'} placeholder={'Enter Password'} label={'Confirm Password'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value)
            }} type={'password'} />
            <Button text={'Create Account'} onClick={() => {
            }} />
            <BottomWarning label={'By creating an account, you agree with our '} to={'/terms'} buttonText={'Terms and Conditions and Privacy Statement.'} />
        </>
    )
})


export default Register