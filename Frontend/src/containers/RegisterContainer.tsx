import React from 'react'
import Input from '../components/Input';
import { Button } from '../components/Button';
import { useState } from 'react';
import useAuth from '../CustomHooks/UseAuth';
import ErrorMessage from '../components/ErrorMessage';
const RegisterContainer = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordMatched, setIsPasswordMatched] = useState(false);
    const { register, authState } = useAuth();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setIsPasswordMatched(false);
        }
        await register(email, password);
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input id={'email'} placeholder={'Enter email address'} label={'Email Address'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
            }} type={'email'} />
            <Input id={'password'} placeholder={'Enter Password'} label={'Password'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value)
            }} type={'password'} />
            <Input id={'confirm-password'} placeholder={'Enter Password'} label={'Confirm Password'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setConfirmPassword(e.target.value)
            }} type={'password'} />
            {authState.error && <ErrorMessage error={authState.error} />}
            {isPasswordMatched && <ErrorMessage error={'password and confirm password are not matched'} />}
            <Button
                type='submit'
                loading={{
                    state: authState.isLoading,
                    message: 'Registering...'
                }}
                text={'Continue with Email'}
            />
        </form>
    )
}

export default RegisterContainer