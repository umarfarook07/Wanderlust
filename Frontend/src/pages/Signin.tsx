import HeaderComponent from '../components/CenterHeading'
import Input from '../components/Input'
import ForgetPassword from '../components/ForgetPassword'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import { useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import { memo } from 'react'
const Signin = memo(() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignin = async () => {

        try {
            const response: AxiosResponse = await axios.post('http://localhost:3000/api/auth/admin/signin', {
                email,
                password
            });
            if (response.status === 200) {
                alert(response.data);
            }
        } catch (error: any) {
            console.log('there is some error from catch block')
            setError(error.response.data.error);
        }
    }

    return (
        <section className='flex justify-center'>
            <div className='w-[400px] flex flex-col'>
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
                <BottomWarning label={'Already have an Account?'} to={'/signup'} buttonText={'sign up'} />
                <div>
                    {error}
                </div>
            </div>
        </section>
    )
});

export default Signin