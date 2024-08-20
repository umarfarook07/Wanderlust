import AuthTemplate from '../containers/AuthContainer'
import HeaderComponent from '../components/CenterHeading'
import { BottomWarning } from '../components/BottomWarning'
import DividerWithText from '../components/DividerWithText'
import { memo } from 'react'
import SocialAuthButtons from '../components/SocialAuthButtons'
import RegisterContainer from '../containers/RegisterContainer'

const Signin = memo(() => {
    return (
        <AuthTemplate>
            <div>
                <HeaderComponent heading={'Register'} />
                <RegisterContainer />
                <DividerWithText />
                <SocialAuthButtons />
                <BottomWarning label={'Already Have an Account?'} to={'/signin'} buttonText={'Sign in'} />
            </div>
        </AuthTemplate>
    )
});

export default Signin