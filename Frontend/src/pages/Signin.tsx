import AuthTemplate from '../containers/AuthContainer'
import HeaderComponent from '../components/CenterHeading'
import ForgetPassword from '../components/ForgetPassword'
import { BottomWarning } from '../components/BottomWarning'
import DividerWithText from '../components/DividerWithText'
import { memo } from 'react'
import SocialAuthButtons from '../components/SocialAuthButtons'
import SigninContainer from '../containers/SigninContainer'

const Signin = memo(() => {
    return (
        <AuthTemplate>
            <div>
                <HeaderComponent heading={'SIGN IN'} />
                <SigninContainer />
                <ForgetPassword />
                <DividerWithText />
                <SocialAuthButtons />
                <BottomWarning label={'Don’t have an account?'} to={'/signup'} buttonText={'Register'} />
            </div>
        </AuthTemplate>
    )
});

export default Signin