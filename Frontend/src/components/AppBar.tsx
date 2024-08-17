import { memo } from 'react';
import Logo from './Logo'
import NavBar from './NavBar';
import { Button } from './Button';
import { Navigate, useNavigate } from 'react-router-dom';

const AppBar = memo(() => {
    const Navigate = useNavigate();
    return (
        <header className='flex justify-between px-2 py-1 pl-4 items-center'>
            <Logo />
            <NavBar items={['Home', 'Discover', 'Activities', 'About', 'Contact']} />
            <div className='flex gap-3 mr-2'>
                <Button text={'Register'} onClick={() => {
                    Navigate('/signup');
                }} />
                <Button text={'Sign in'} onClick={() => {
                    Navigate('/signin');
                }} />
            </div>
        </header>
    )
})

export default AppBar