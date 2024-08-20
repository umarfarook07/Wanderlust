import React from 'react'
import Input from '../components/Input';
import { Button } from '../components/Button';
import { useState } from 'react';
import useAuth from '../CustomHooks/UseAuth';
import ErrorMessage from '../components/ErrorMessage';
const SigninContainer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signin, authState } = useAuth();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await signin(email, password);
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input id={'email'} placeholder={'Enter email address'} label={'Email Address'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
            }} type={'email'} />
            <Input id={'password'} placeholder={'Enter Password'} label={'Password'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value)
            }} type={'password'} />
            {authState.error && <ErrorMessage error={authState.error} />}
            <Button
                type='submit'
                loading={{
                    state: authState.isLoading,
                    message: 'loading...'
                }}
                text={'Continue with Email'}
            />
        </form>
    )
}

export default SigninContainer