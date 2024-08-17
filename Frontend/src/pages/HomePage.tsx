import React from 'react'
import { memo } from 'react'
import AppBar from '../components/AppBar'
import LandingPage from '../components/LandingPage'
import Warning from '../components/Warning'
import FeaturedHotels from '../components/FeaturedHotels'

const HomePage = memo(() => {
    return (
        <div className='h-screen px-2'>
            {/* <AppBar /> */}
            <LandingPage />
            <Warning />
            <FeaturedHotels />
        </div>
    )
});

export default HomePage