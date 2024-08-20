import React from 'react'
import { memo } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
// TODO:code is violating dry principle try to reduce it
// TODO: Add hover effects
const SocialAuthButtons = memo(() => {
    return (
        <div>
            <GoogleButton />
            <FacebookButton />
        </div>
    )
});
const GoogleButton = memo(() => {
    return (
        <div className='flex justify-center items-center gap-1 border my-2 py-2'>
            <GoogleIcon fontSize="medium"/>
            <button>
                Continue With Google
            </button>
        </div>
    )
})

const FacebookButton = memo(() => {
    return (
        <div className='flex justify-center items-center gap-1 border bg-facebookColor my-2 py-2 text-white'>
            <FacebookIcon fontSize="medium"/>
            <button>
                Continue With Facebook
            </button>
        </div>
    )
})

export default SocialAuthButtons