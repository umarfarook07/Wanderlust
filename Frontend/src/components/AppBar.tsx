import { memo } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import useAuth from '../CustomHooks/UseAuth';
const AppBar = memo(() => {
    const navigate = useNavigate();
    const { authState, setAuthState } = useAuth();
    const handleLogout = () => {
        localStorage.removeItem('jwt_token');
        setAuthState(prevState => ({ ...prevState, isAuth: false }));
        navigate('/signin'); 
    };
    return (
        <header className='flex justify-between px-2 py-1 pl-4 items-center'>
            <Logo />
            <NavBar items={['Home', 'Discover', 'Activities', 'About', 'Contact']} />
            {!authState.isAuth ? (
                <div className='flex gap-3 mr-2'>
                    <Button text={'Register'} onClick={() => navigate('/signup')} />
                    <Button text={'Sign in'} onClick={() => navigate('/signin')} />
                </div>
            ) : (
                <div>
                    <Button text={'Logout'} onClick={handleLogout} />
                </div>
            )}
        </header>
    );
});

export default AppBar;
