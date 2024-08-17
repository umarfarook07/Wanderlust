import HeaderComponent from "../components/CenterHeading";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import React, { useState } from "react";
import { memo } from "react";
import axios, { AxiosResponse } from "axios";

const Signup = memo(() => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = async () => {

        try {
            const response:AxiosResponse = await axios.post('http://localhost:3000/api/auth/admin/signin', {
                username: email,
                password
            });

        } catch (error) {
            console.log('there is some error from catch block')
        }
    }

    return (
        <section className='flex justify-center'>
            <div className='w-[400px] flex flex-col'>
                <HeaderComponent heading={'SIGN UP'} />
                <Input id={'email'} placeholder={'Enter email address'} label={'Email Address'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                }} type={'email'} />
                <Input id={'password'} placeholder={'Enter Password'} label={'Password'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value)
                }} type={'password'} />
                <Button text={'Continue with Email'} onClick={() => {
                    handleSignin()
                }} />
                <BottomWarning label={'new user?'} to={'/signin'} buttonText={'sign in'} />
            </div>
        </section>
    )
});

export default Signup